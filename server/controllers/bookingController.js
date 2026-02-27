import Booking from "../models/Booking.js";
import Service from "../models/Service.js";
import stripe from 'stripe'


export const createBooking = async (req, res) => {
    try {
        const { serviceId, address, date } = req.body.bookingData;
        const { origin } = req.headers;

        const userData = req.user;
        const serviceData = await Service.findById(serviceId);

        const booking = await Booking.create({
            user: userData._id,
            service: serviceData._id,
            address, 
            price: serviceData.price + 50,
            date,
        });

        const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

        const line_items = [{
            price_data: {
                currency: 'inr',
                product_data: {
                    name: serviceData.service
                },
                unit_amount: Math.floor(booking.price) * 100
            },
            quantity: 1
        }]

        const session = await stripeInstance.checkout.sessions.create({
            success_url: `${origin}/my-bookings`,
            cancel_url: `${origin}/my-bookings`,
            line_items,
            mode: 'payment',
            metadata: {
                bookingId: booking._id.toString()
            },
            expires_at: Math.floor(Date.now() /1000) + 60 * 60 * 23, // Expires in 23 hours
        });

        booking.paymentLink = session.url;
        await booking.save();

        res.json({success: true, message: "Service booked successfully", url: session.url});

    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`createBooking ${error.message}`);
    }
}