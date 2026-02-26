import Worker from "../models/Worker.js";


export const addWorker = async (req, res) => {
    try {
        const {name, salary, service} = req.body.workerData;

        if(!name || !service || !salary){
            return res.json({success: false, message: "Missing required fields"});
        }

        await Worker.create({
            name, salary, service
        });

        res.json({success: true, message: "Worker added successfully"});

    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`addWorker ${error.message}`);
    }
}

export const getAllWorkers = async (req, res) => {
    try {
        const workers = await Worker.find({});
        res.json({success: true, workers});
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`getAllWorkers ${error.message}`);
    }
}