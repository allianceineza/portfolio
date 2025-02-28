import mongoose from "mongoose";


const {model, Schema}=mongoose;
const userSchema=Schema(
    {
        userName:{
            type: String,
            required:true
        },
      
    userEmail:{
        type: String,
        required:true   
    },
    userPassword:{
        type: String,
        required:true  
    },
    userRole:{
        type: String,
        default:"user",
        enum:["user","Admin" ] ,
        required:false

    },
    tokens: {
    accessToken: {
        type:String,
        default: ""
    }
    }
}

);

const User =model("user",userSchema);
export default User