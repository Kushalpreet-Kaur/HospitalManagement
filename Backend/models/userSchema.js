import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    firstname:{type:String , required: true , minLength:[3,"First name must contain atleast 3 characters!"]},

    lastname:{type:String , required: true , minLength:[3,"Last name must contain atleast 3 characters!"]},

    email:{type:String , required: true ,validate:[validator.isEmail , "Please provide a valid email!"]},

    phone:{type:String , required: true , minLength:[11,"Phone number must contain exact 10 digits !!"],maxLength:[11,"Phone number must contain exact 10 digits !!"]},// if type is number we can't define min and max length


    nic:{type:String , required: true , minLength:[13,"NIC must contain exact 13 digits !!"],maxLength:[13,"NIC must contain exact 13 digits !!"]},

    dob:{type: Date , required :[true , "DOB is required"]},

    gender:{type:String , required:true , enum:["male" , "female"]},

    password: {type:String , required : true ,minLength:[8, "Password must contain atleast 8 characters !"],select:false}, // will get all details except pass

    role:{type : String , required:true , enum:["Admin" , "Patient","Doctor"]},

    doctorDepartment:{type:String},

    docAvatar:{public_id: String , url:String},

});

//to update the functionalities in password 

userSchema.pre("save",async function (next) 
{
    if(!this.isModified("password"))
        {
            next()
        }   
        this.password = await bcrypt.hash(this.password,10);
});
// when  a user schema is saved , if the pass is changed it will bcrypt then hash it for security
// this will save hash pass

// to compare the new pass with hash value

userSchema.methods.comparePassword = async function(enteredPassword)
{
    return await bcrypt.compare(enteredPassword , this.password); // original and encrypted pass
};


userSchema.methods.generateJsonWebToken = function()
{
    return jwt.sign({id: this._id} , process.env.JWT_SECRET_KEY , {expiresIn: process.env.JWT_EXPIRES});
}

// create a model for above one

export const User = mongoose.model("User",userSchema) // defining schema here 
