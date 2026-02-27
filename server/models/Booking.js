import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    service: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Service'},
    price: {type: Number, required: true},
    status: {type: String, enum: ['Upcoming', 'Canceled', 'Completed'], default: 'Upcoming'},
    isPaid: {type: Boolean, default: false},
    address: {type: String, required: true},
    date: {type: Date, required: true},
    paymentLink: {type: String}
}, {timestamps: true});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;