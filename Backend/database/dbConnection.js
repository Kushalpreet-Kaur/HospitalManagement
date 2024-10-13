
import mongoose from "mongoose";

export const dbConnection = ()=>

{   // THEN = if run succesfully then callback function main ye dena
    mongoose.connect(process.env.MONGO_URI , 
        {dbName: "HOSPITAL_MANAGEMENT",})
        .then( ()=>{ console.log("Connected to database!!!!!!!!!!!");} )
        .catch( (err)=> { console.log(`Some error occured while connecting to the database: ${err}`);} );
};