import express from 'express'
import { cancelBooking, completeBooking, createBooking, dashboardData, getAllBookings, getSingleUserBookings } from '../controllers/bookingController.js';
import { authUser } from '../middleware/authUser.js';

const bookingRouter = express.Router();

bookingRouter.post('/create', authUser, createBooking);
bookingRouter.get('/get-all', getAllBookings);
bookingRouter.get('/get-single', authUser, getSingleUserBookings);
bookingRouter.put('/complete', completeBooking);
bookingRouter.put('/cancel', authUser, cancelBooking);
bookingRouter.get('/dashboard', dashboardData);

export default bookingRouter;