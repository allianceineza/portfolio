import React, { useState } from "react";
import "../assets/styles/contactus.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    jobTitle: "",
    companyName: "",
    companyZip: "",
    companySize: "",
    aboutYourself: "",
    message: "",
    hearAboutUs: "",
    interestedInPrimaryCare: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtext">
        Learn how One Medical supports employees at all kinds of organizations.
        Tell us about yours and one of our experts will get right back to you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            className="form-input"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            className="form-input"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="email"
            name="workEmail"
            placeholder="Work Email *"
            className="form-input"
            value={formData.workEmail}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number *"
            className="form-input"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title *"
            className="form-input"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name *"
            className="form-input"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="companyZip"
          placeholder="Company HQ ZIP Code *"
          className="form-input"
          value={formData.companyZip}
          onChange={handleChange}
          required
        />

        <div className="form-row">
          <select
            name="companySize"
            className="form-select"
            value={formData.companySize}
            onChange={handleChange}
            required
          >
            <option value="">Company Size *</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>
          <select
            name="aboutYourself"
            className="form-select"
            value={formData.aboutYourself}
            onChange={handleChange}
            required
          >
            <option value="">Tell us about yourself *</option>
            <option value="HR">HR / People Ops</option>
            <option value="Executive">Executive / Founder</option>
            <option value="Benefits Admin">Benefits Admin</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Message"
          className="form-textarea"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <div className="form-group">
          <label className="form-label">How did you hear about us? *</label>
          <select
            name="hearAboutUs"
            className={`form-select ${
              !formData.hearAboutUs ? "error-border" : ""
            }`}
            value={formData.hearAboutUs}
            onChange={handleChange}
            required
          >
            <option value="">Please Select</option>
            <option value="Google">Google</option>
            <option value="Referral">Referral</option>
            <option value="Event">Event</option>
            <option value="Social Media">Social Media</option>
          </select>
          {!formData.hearAboutUs && (
            <p className="error-text">Please complete this required field.</p>
          )}
        </div>

        <div className="form-checkbox">
          <input
            type="checkbox"
            name="interestedInPrimaryCare"
            checked={formData.interestedInPrimaryCare}
            onChange={handleChange}
          />
          <label>I'm interested in learning more about direct primary care</label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>

        <p className="form-footer">
          By submitting this form, you agree to our <a href="#">Privacy Policy</a> and to
          receive information regarding our One Medical for Business offerings.
        </p>
      </form>
    </div>
    <div className="healthnetabout">
      <h1>About HealthNet</h1>
      <p>HealthNet is a rapidly expanding network offering comprehensive healthcare services. We provide easy access to a wide range of medical facilities, including clinics, hospitals, and pharmacies, all available through our user-friendly platform. With 24/7 virtual care and convenient on-site wellness centers, we are dedicated to delivering a modern, patient-focused healthcare experience that meets the needs of every individual.</p>
    </div>
    </>
  );
};

export default ContactForm;
