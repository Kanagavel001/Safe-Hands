import jwt from 'jsonwebtoken'
import User from '../models/User.js';

export const authUser = async (req, res, next) => { 
    const { token } = req.cookies;

    if(!token){
        return res.json({success: false, message: 'Not Authorized'});
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.user = await User.findById(tokenDecode.id).select("-password");
        }else{
            return res.json({ success: false, message: 'Not Authorized'});
        }

        next();
    } catch (error) {
        res.json({success: false, message: error.message});
        console.log(`authUser ${error.message}`);
    }
}