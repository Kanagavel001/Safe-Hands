import express from 'express'
import { changePrice, createService, getAllServices } from '../controllers/serviceController.js';
import upload from '../middleware/multer.js';

const serviceRouter = express.Router();

serviceRouter.post('/create', upload.single('image'),createService);
serviceRouter.get('/get-all', getAllServices);
serviceRouter.put('/change-price', changePrice);

export default serviceRouter;