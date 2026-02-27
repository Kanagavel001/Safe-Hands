import Booking from "../models/Booking.js";
import Service from "../models/Service.js";
import stripe from 'stripe'
import User from "../models/User.js";
import Worker from "../models/Worker.js";


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

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({}).populate('user service').sort({date: 1});
        res.json({success: true, bookings});
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`getAllBookings ${error.message}`);
    }
}

export const getSingleUserBookings = async (req, res) => {
    try {
        const user = req.user;
        const userData = await User.findOne({email: user.email});
        const bookings = await Booking.find({user: userData._id}).populate('service').sort({createdAt: -1});
        res.json({success: true, bookings});
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`getSingleUserBookings ${error.message}`);
    }
}

export const completeBooking = async (req, res) => {
    try {
        const {id} = req.body;
        await Booking.findByIdAndUpdate(id, {isPaid: true, status: 'Completed', paymentLink: ""});
        res.json({success: true, message: "Service completed successfully"})
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`completeBooking ${error.message}`);
    }
}

export const cancelBooking = async (req, res) => {
    try {
        const {id} = req.body;
        await Booking.findByIdAndUpdate(id, {status: 'Canceled', paymentLink: ""});
        res.json({success: true, message: "Service canceled successfully"});
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`cancelBooking ${error.message}`);
    }
}

export const dashboardData = async (req, res) => {
    try {
        const bookings = await Booking.countDocuments();
        const services = await Service.countDocuments();
        const workers = await Worker.countDocuments();
        const booking = await Booking.find({isPaid: true});
        const totalRevenue = booking.reduce((acc, item) => acc + item.price, 0);

        const dashboardData = {
            bookings, services, workers, totalRevenue
        }

        res.json({success: true, dashboardData})
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`dashboardData ${error.message}`);
    }
}