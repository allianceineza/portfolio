import React,{useState} from "react";
import '../assets/Styles/signup.css';
import Login from "./Login";

        
        
    const Signup=()=>{
    return(
        <div>
            <form>
            <div className="overlay">
            <div className="form-signup">
                <h3>Create Account</h3>
                <input type="text" placeholder=" enter yourfirst name" className="input-signup" id="name" />
                <input type="text" placeholder="enter your last name" className="input-signup" id="name" />
                <input type="text" placeholder="enter your phone" className="input-signup" id="phone" />
                <input type="email" placeholder="enter email" className="input-signup" id="email" />
                <button type="login" className="button-signup" onClick={handlemodel}>sign up</button>
            </div></div>
            </form>
            
        </div>
     )

 }


export default Signup;