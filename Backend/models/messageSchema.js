import mongoose from "mongoose";
import validator from "validator";


const messageSchema = new mongoose.Schema({
    firstname:{type:String , required: true , minLength:[3,"First name must contain atleast 3 characters!"],},
    lastname:{type:String , required: true , minLength:[3,"Last name must contain atleast 3 characters!"]},
    email:{type:String , required: true ,validate:[validator.isEmail , "Please provide a valid email!"]},
    phone:{type:String , required: true , minLength:[10,"Phone number must contain exact 10 digits !!"],maxLength:[10,"Phone number must contain exact 10 digits !!"]},// if type is number we can't define min and max length
    message:{type:String , required: true , minLength:[20,"Message must contain atleast 20 characters!"]},
});

// create a model for above one

export const Message = mongoose.model("Message",messageSchema) // defining schema here 
