import React, { useState } from "react";
import "./dashboard-styles/addhospital.css"; 


const Addclinic = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    designation: "",
    department: "Neurology",
    address: "",
    specialist: "",
    mobile: "",
    doctorImage: null,
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleFileChange = (e) => {
    setFormData({ ...formData, doctorImage: e.target.files[0] });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    
    console.log("Doctor details submitted:", formData);
  };

  
  return (
    <div className="doctor-form-container">
      <h2>ADD CLINICS</h2>
      <form onSubmit={handleSubmit} className="doctor-form">
        <div className="form-group">
          <label> Name</label>
          <input type="text" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange} required />

          <label>Category</label>
          <input type="text" name="lastName" placeholder="Enter category" value={formData.category} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />

          <label>Create Password</label>
          <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Designation</label>
          <input type="text" name="designation" placeholder="Enter Designation" value={formData.designation} onChange={handleChange} required />

          <label>Department</label>
          <select name="department" value={formData.department} onChange={handleChange} required>
            <option value="Neurology">Neurology</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
          </select>
        </div>

        <div className="form-group">
          <label>Location</label>
          <input type="text" name="address" placeholder="Location" value={formData.address} onChange={handleChange} required />

          <label>Specialist</label>
          <input type="text" name="specialist" placeholder="Specialist" value={formData.specialist} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
          <label>Short Biography</label>
          <input type="text" name="mobile" placeholder="Short bio" value={formData.mobile} onChange={handleChange} required />


          <label>Clinic document(CV)</label>
          <input type="file" name="hospitaldocument" onChange={handleFileChange} />
        </div>
      </form>
      <button type="submit" className="submit-button">Reset</button>
      <button type="submit" className="submit-button">Add Clinic</button>
    </div>
  );
};

export default Addclinic;
