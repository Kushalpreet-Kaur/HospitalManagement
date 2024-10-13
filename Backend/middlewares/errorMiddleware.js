class ErrorHandler extends Error{
    constructor(message , statusCode)
    {
        super(message); // message is already defined in error class
        this.statusCode = statusCode; // made now
    }
}

// we are using class here bcz error named class exist in js

// starting middleware using error middleware
export const errorMiddleware = (err,req,res,next)=>{
    err.message = err.message || "Internal server error";
    err.statusCode = err.statusCode || 500;

    //this is a type of error
    if(err.code===11000) // 11000 occures when same value occur again
    {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`; // object.keyvalues is used to get key values of error
        err = new ErrorHandler(message,400);
    }

    // another err
    if(err.name==="JsonWebTokenError")
    {
        const message = "Json Web Token is Invalid , Try Again !";
        err = new ErrorHandler(message,400);
    }

    if(err.name === "TokenExpiredError")
    {
        const message = "Json Web Token Expired , Try Again !";
        err = new ErrorHandler(message,400);
    }
    // when data enetered is wrong , type error , validation not matched
    if(err.name ==="CastError")
    {
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message,400);
    }

    //we want to show only message not the values 

    const errorMessage = err.errors ? Object.values(err.errors).map(error=> error.message).join(" ") : err.message;
    // to get a clean message

    
    return res.status(err.statusCode).json({
        sucess:false,
        message: err.message,
    });
}

export default ErrorHandler;