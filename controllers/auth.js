const User = require("../models/User.js");
const ErrorResponse = require("../utils/ErrorResponse.js");


const sendToken = (user,statusCode,res)=>{

    const token = user.getSignedJwtToken();
    res.status(statusCode).json({success:true,token});


}


exports.register = async (req,res,next)=>{
    const {username,email,password} = req.body;

const existing_email = await User.findOne({email});

if(existing_email){
    return next(new ErrorResponse("Email Already in use",400))
}

    try {
        const user = await User.create({username,email,password});
        sendToken(user,201,res);
    } catch (error) {
        next(err);
    }

}