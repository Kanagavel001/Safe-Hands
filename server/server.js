import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './configs/db.js';
import serviceRouter from './routers/serviceRouter.js';
import connectCloudinary from './configs/cloudinary.js';
import workerRouter from './routers/workerRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();

connectDB();
connectCloudinary();

const allowedOrigins = ['http://localhost:5173'];

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin : allowedOrigins, credentials : true }));

app.get('/', (req, res) => res.send('Server is live!'));
app.use('/api/user', userRouter);
app.use('/api/service', serviceRouter);
app.use('/api/worker', workerRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));