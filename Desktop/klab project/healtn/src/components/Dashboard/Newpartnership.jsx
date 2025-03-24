import React from "react";
import "./dashboard-styles/newpartnership.css";

const patients = [
  { name: "Richard", email: "Richard288@gmail.com", contact: "+1-202-555-0875", disease: "Fever", image: "https://via.placeholder.com/50" },
  { name: "William", email: "William434@gmail.com", contact: "+1-202-534-0112", disease: "Eye", image: "https://via.placeholder.com/50" },
  { name: "John Doe", email: "johndeo652@gmail.com", contact: "+1-202-182-0132", disease: "Typhoid", image: "https://via.placeholder.com/50" },
  { name: "Martin", email: "Martin876@gmail.com", contact: "+1-202-998-2341", disease: "Cancer", image: "https://via.placeholder.com/50" },
  { name: "Robert", email: "Robert082@gmail.com", contact: "+1-202-455-1431", disease: "Diabetes", image: "https://via.placeholder.com/50" },
];

const NewPartnerships = () => {
  return (
    <div className="new-patients-container">
      <h2>NEW PATIENTS</h2>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>E-mail Id</th>
            <th>Contact</th>
            <th>Disease</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>
                <img src={patient.image} alt={patient.name} className="patient-image" />
                {patient.name}
              </td>
              <td>{patient.email}</td>
              <td>{patient.contact}</td>
              <td>{patient.disease}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewPartnerships;