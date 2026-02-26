import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    service: {type: String, required: true},
    salary: {type: Number, required: true},
});

const Worker = mongoose.model('Worker', workerSchema);

export default Worker;