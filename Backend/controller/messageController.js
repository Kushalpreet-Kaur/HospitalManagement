// to send message
import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";
import Errorhandler from "../middlewares/errorMiddleware.js"
export const sendMessage = catchAsyncErrors(async(req,res,next) =>{   // using middleware here catchAsyncErrors
    const{firstname , lastname , email , phone , message} = req.body; // get all these 
    if(!firstname || !lastname || !email || !phone || !message)
    {
        // return res.status(400).json({sucess:false,message:"Please fill the form"}); // earlier code before using middleware
        return next(new Errorhandler("Please fill the form!",400));
    }
   
    // if the if condition is fulfilled this will run 
    await Message.create({firstname , lastname , email , phone , message});

    res.status(200).json({sucess:true, message:"Message Sent Successfully !!"});

    // we will define a path for all this using Router 
});

export const getAllMessages = async (req, res) => {
  try {

    // step 1: Parsing the body
    //step 2: if no message then it will give error else print the message through get 
    // step2: if message is avaiable in the database then i will print them

    // stp 2: get message 
    // 
    
  } catch (error) {
    // else it will display error if resp = false 
    
  }
}
