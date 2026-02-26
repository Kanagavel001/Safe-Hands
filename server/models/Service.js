import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    service: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;