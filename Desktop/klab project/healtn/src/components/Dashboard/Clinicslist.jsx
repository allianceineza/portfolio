import React from "react";
import Activeinactivehospitals from "./Activeinactivehospitals";
import "./dashboard-styles/hospitalslist.css";

const doctors = [
  { name: "CHIK", specialty: "Ophthalmologist", location: "NYARUGENGE", image: "/imageh/CHIK.jpeg" },
  { name: "Linda Barrett", specialty: "Dentist", location: "United States, San Francisco", image: "/image/" },
  { name: "Ronald Jacobs", specialty: "Oncologist", location: "United States, San Francisco", image: "https://via.placeholder.com/50" },
  { name: "Mark Hunter", specialty: "Cardiologist", location: "United States, New York", image: "https://via.placeholder.com/50" },
  { name: "Cristina Groves", specialty: "Psychiatrist", location: "United States, California", image: "https://via.placeholder.com/50" },
  { name: "Justin Parker", specialty: "Pediatrics", location: "United States, New York", image: "https://via.placeholder.com/50" },
  { name: "Shirley Willis", specialty: "Radiologist", location: "United States, San Francisco", image: "https://via.placeholder.com/50" },
  { name: "Diana Bailey", specialty: "General Surgery", location: "United States, California", image: "https://via.placeholder.com/50" },
  { name: "Albert Sandoval", specialty: "Neurologist", location: "United States, San Francisco", image: "https://via.placeholder.com/50" },
];

const ClinicList = () => {
  return (
    <>
    <div className="hospital-list">
      {doctors.map((doctor, index) => (
        <div key={index} className="doctor-card">
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <div className="doctor-info">
            <h3>{doctor.name}</h3>
            <p className="specialty">{doctor.specialty}</p>
            <p className="location">📍 {doctor.location}</p>
          </div>
          <button className="options-button">⋮</button>
        </div>
      ))}
    </div>
    <Activeinactivehospitals/>
    </>
  );
};
export default ClinicList;