import React from "react";
import "./dashboard-styles/activeinactivehospitals.css";

const doctors = [
  { name: "James Zathila", specialty: "Gynaecologist", image: "https://via.placeholder.com/50", active: false },
  { name: "John Doe", specialty: "Radiotherapist", image: "https://via.placeholder.com/50", active: true },
  { name: "Khadiza Rehna", specialty: "General Surgeon", image: "https://via.placeholder.com/50", active: false },
  { name: "Peter Amber", specialty: "Orthopedic", image: "https://via.placeholder.com/50", active: true },
  { name: "Helen Southern", specialty: "Heart Surgeon", image: "https://via.placeholder.com/50", active: true },
  { name: "Jordan", specialty: "Heart Surgeon", image: "https://via.placeholder.com/50", active: false },
];

const ActiveDoctors = () => {
  return (
    <div className="active-doctors-container">
      <h2>ACTIVE/INACTIVE HOSPITALS</h2>
      <div className="doctor-list">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-item">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </div>
            <div className="status-icon">
              {doctor.active ? (
                <span className="active">✔</span>
              ) : (
                <span className="inactive">➕</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveDoctors;
