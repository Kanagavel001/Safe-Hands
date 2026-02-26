import express from 'express';
import { addWorker, getAllWorkers } from '../controllers/workerController.js';

const workerRouter = express.Router();

workerRouter.post('/add', addWorker);
workerRouter.get('/get-all', getAllWorkers);

export default workerRouter;