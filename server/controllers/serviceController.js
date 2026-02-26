import { v2 as cloudinary } from 'cloudinary';
import Service from '../models/Service.js';

export const createService = async (req, res) => {
    try {
        
        const {service, category, price} = JSON.parse(req.body.serviceData);
        const imageFile = req.file;

        if(!service || !category || !price || !imageFile){
            return res.json({success: false, message: "Missing required fields"})
        }

        const uploadImage = async () => {
            const response = await cloudinary.uploader.upload(imageFile.path);
            return response.secure_url;
        }

        const image = await uploadImage();

        const ser = await Service.create({
            service,
            category,
            price,
            image
        });

        res.json({success: true, message: 'Service added successfully'});

    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`createService ${error.message}`);
    }
}

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find({});
        res.json({success: true, services});
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`getAllServices ${error.message}`);
    }
}

export const changePrice = async (req, res) => {
    try {
        const {id, price} = req.body.serviceData;
        await Service.findByIdAndUpdate(id, {price});
        res.json({success: true, message: 'Price changed successfully'});
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`changePrice ${error.message}`);
    }
}