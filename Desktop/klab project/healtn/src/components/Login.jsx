import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "../assets/Styles/login.css";
import { IoMdClose } from "react-icons/io";
import Signup from "./Signup";

const Hooks = ({ closeform }) => {
  const [signup, setSignup] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  // 🔥 Redirect logged-in users away from login page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); 
    }
  }, []); 

  // 🔹 Handle Signup Modal Toggle
  const handlemodal = () => {
    setSignup(!signup);
  };



  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="overlay">
          <div className="form">
            <div>
              <IoMdClose onClick={closeform} className="close" />
            </div>

            <p>Login to an account</p>
            {error && <p className="error-message">{error}</p>} {/* Show error if login fails */}

            <label htmlFor="email">Email address*</label>
            <input
              type="email"
              placeholder="Enter email"
              className="input"
              id="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input"
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />

            <div className="forget">
              <input type="checkbox" className="checkbox" />
              Remember me
            </div>

            <button type="submit" className="signin-button">Sign in</button>

            <p>
              Don't have an account?{" "}
              <span className="signup-button" onClick={handlemodal}>
                <b>Sign up</b>
              </span>
            </p>
          </div>
        </div>
      </form>

      {signup && <Signup handlemodal={handlemodal} />}
    </div>
  );
};

export default Hooks;
