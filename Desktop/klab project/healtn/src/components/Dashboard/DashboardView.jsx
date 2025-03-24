import React from "react";
import { FaUserMd, FaUserNurse, FaUserPlus, FaBriefcaseMedical } from "react-icons/fa";
import NewPartnerships from "./Newpartnership";
import "./dashboard-styles/dashboard-view.css";

const stats = [
  { id: 1, title: "DOCTORS", count: 4567, icon: <FaUserMd />, color: "#0084ff" },
  { id: 2, title: "HOSPITALS", count: 4567, icon: <FaUserNurse />, color: "#0084ff" },
  { id: 3, title: "CLINICS", count: 4567, icon: <FaUserPlus />, color: "#0084ff" },
  { id: 4, title: "PHARMACY", count: 4567, icon: <FaBriefcaseMedical />, color: "#0084ff" },
];

const DashboardCards = () => {
  return (
    <>
    <div className="dashboard-container">
      {stats.map((item) => (
        <div key={item.id} className="card">
          <div className="card-content">
            <div>
              <h3>{item.title}</h3>
              <h2>{item.count}</h2>
            </div>
            <div className="icon-container" style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
    <NewPartnerships/>
    </>
  );
};

export default DashboardCards;
