import express from 'express'
import { createBooking } from '../controllers/bookingController.js';
import { authUser } from '../middleware/authUser.js';

const bookingRouter = express.Router();

bookingRouter.post('/create', authUser, createBooking);

export default bookingRouter;