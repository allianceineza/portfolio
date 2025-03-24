import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaUser, FaTh, FaRegCalendarCheck, FaMoneyBillWave, FaFileAlt, FaUsers } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import "./dashboard-styles/sidebar.css";

const Sidebar = () => {
  const [isHospitalMenuOpen, setIsHospitalMenuOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">MEDjestic</h2>
        <img src="imageh/home5.jpg" alt="Dr. Samuel" className="profile-img" />
        <h3>Dr. INEZA</h3>
        <p>Admin</p>
      </div>

      <ul className="sidebar-menu">
        <li><Link to="/dashboard" className="menu-link"><FaTh className="icon" /> Dashboard</Link></li>

        
        <li onClick={() => setIsHospitalMenuOpen(!isHospitalMenuOpen)} className="dropdown">
          <FaUserMd className="icon" /> Hospital
        </li>
        {isHospitalMenuOpen && (
          <ul className="submenu">
            <Link to="/Dashboard/Addhospital" className="menu-link"><li>Addhospital</li></Link>
            <Link to="/Dashboard/hospitalslist" className="menu-link"><li>hospitalslist</li></Link>
          </ul>
        )}

<li onClick={() => setIsHospitalMenuOpen(!isHospitalMenuOpen)} className="dropdown">
          <FaUserMd className="icon" /> Clinics
        </li>
        {isHospitalMenuOpen && (
          <ul className="submenu">
            <Link to="/Dashboard/Addclinic" className="menu-link"><li>Addclinic</li></Link>
            <Link to="/Dashboard/clinicslist" className="menu-link"><li>clinicslist</li></Link>
          </ul>
        )}

<li onClick={() => setIsHospitalMenuOpen(!isHospitalMenuOpen)} className="dropdown">
          <FaUserMd className="icon" /> pharmacies
        </li>
        {isHospitalMenuOpen && (
          <ul className="submenu">
            <Link to="/Dashboard/Addpharmacy" className="menu-link"><li>Addpharmacy</li></Link>
            <Link to="/Dashboard/pharmacieslist" className="menu-link"><li>pharmacieslist</li></Link>
          </ul>
        )}

        <li><Link to="/patient" className="menu-link"><FaUser className="icon" /> Partners</Link></li>
        <li><Link to="/department" className="menu-link"><FaUsers className="icon" /> Department</Link></li>
        <li><Link to="/schedule" className="menu-link"><MdSchedule className="icon" /> Doctor Schedule</Link></li>
        <li><Link to="/appointment" className="menu-link"><FaRegCalendarCheck className="icon" /> Appointment</Link></li>
        <li><Link to="/payment" className="menu-link"><FaMoneyBillWave className="icon" /> Payment</Link></li>
        <li><Link to="/report" className="menu-link"><FaFileAlt className="icon" /> Report</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
