import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import UsestateHook from "../components/Login.jsx";
import { useNavigate } from "react-router-dom";
import "../assets/Styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [model, setModel] = useState(false); 

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    if (selectedValue) {
      navigate(`/${selectedValue}`);
    }
  };

  const closeform = () => {
    setModel(false); 
  };

  return (
    <div className="navbar-container">
      {model && <UsestateHook closeform={closeform} />} 

      <div className="logo" onClick={() => navigate("/")}>
        <img src="imageh/healthnetlogo.png" alt="HealthNet Logo" />
        <h1><i>HealthNet</i></h1>
      </div>

      <div className="navbar-locationcontainer">
        <div className="location-container">
          <select className="location-select" onChange={handleSelectChange}>
            <option value="">Location</option>
            <option value="clinics">Clinics</option>
            <option value="hospitals">Hospitals</option>
            <option value="pharmacy">Pharmacy</option>
          </select>
        </div>

        <div className="location-container">
          <select className="location-select" onChange={handleSelectChange}>
            <option value="">Select Option</option>
            <option value="adults-under-65">Adults Under 65</option>
            <option value="adults-65">Adults 65+</option>
            <option value="kids">Kids</option>
            <option value="medical-agents">Medical Agents</option>
          </select>
        </div>

        <div className="location-container">
          <select className="location-select" onChange={handleSelectChange}>
            <option value="">Overview</option>
            <option value="mental-health">Mental Health</option>
            <option value="small-business">Small Business</option>
            <option value="membership">Membership</option> {/* ✅ Lowercase match */}
            <option value="get-in-touch">Contact Us</option>
          </select>
        </div>

        <button className="login" onClick={() => setModel(true)}>Log In</button>

        <div className="search-icon">
          <AiOutlineSearch />
        </div>
        <div className="menu-icon">
          <IoMdMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
