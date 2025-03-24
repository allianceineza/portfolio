import React from "react";
import { FaBars, FaBell, FaCalendarAlt, FaClipboardList, FaPencilAlt } from "react-icons/fa";
import "./dashboard-styles/dashboard-navbar.css";

const Navbar = ({ toggleSidebar }) => {
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    window.location.href = "/home"; 
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <FaBars className="menu-icon" onClick={toggleSidebar} />
      </div>

      <div className="nav-center">
        <div className="nav-item">
          <FaCalendarAlt className="nav-icon" />
          <span>Make an appointment</span>
        </div>
        <div className="nav-item">
          <FaPencilAlt className="nav-icon" />
          <span>Write a prescription</span>
        </div>
        <div className="nav-item">
          <FaClipboardList className="nav-icon" />
          <span>Generate Report</span>
        </div>
      </div>

      <div className="nav-right">
        <div className="notification">
          <FaBell className="nav-icon" />
          <span className="notification-dot"></span>
        </div>
        <img src="imageh/home6.jpg" alt="Profile" className="profile-img" />
        
        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
