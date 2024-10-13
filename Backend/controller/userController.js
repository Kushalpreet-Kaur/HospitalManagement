import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"

import ErrorHandler from "../middlewares/errorMiddleware.js"
import { User } from "../models/userSchema.js";

export const patientRegister = catchAsyncErrors(async(req,res,next) => // using middleware here
{
    const{firstname , lastname , email , phone , password , gender , dob,nic , role} =req.body; // getting data from body


    if(!firstname||!lastname||!email||!phone||!password||!gender||!dob||!nic||!role)
    {
        return next(new ErrorHandler("Please fill full form ! ",400));
    }

    const user = await User.findOne({email} ); // find the email

    if(user)  // if it exists
    {
        return next(new ErrorHandler("User Already Resgistered !",400));
    } 

    // if not

    user = await User.create({firstname , lastname , email , phone , password , gender , dob,nic , role}); 
    res.status(200).json({ success: true , message: "User Registered !"});
})


