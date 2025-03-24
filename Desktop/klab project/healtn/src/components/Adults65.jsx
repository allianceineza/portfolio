import React from "react";
import Service from "./Service"; 
import Longerappointment from "./Longerappointment";
import "../assets/Styles/adults65.css";

const Adults65 = () => {
  return (
    <>
      <div className="adults65-container">
        <div className="adults-text">
          <h1>Exceptional Primary Care for Adults 65+</h1>
          <p>
            The doctor’s office focused on providing comprehensive primary care 
            for adults 65+.
          </p>
        </div>
        <div className="adult-image">
          <img src="/imageh/home1.jpg" alt="adults-image"/>
        </div></div>
      <div className="select-location">
      <h1>select your location</h1>
      <div className="button-container">
      <button className="submit-btn">
        <select>
        <option>locations</option>
        <option>kigali</option>
      <option>North</option>
      <option>South</option>
      <option>East</option>
      <option>West</option>
      </select></button>
      <button className="submit-btn">submit</button>
      </div>
      </div>
      <div className="healthnet-seniors"><h4>HealthNet Seniors</h4>
      <h1>A care model designed around you</h1>
      <p>Your dedicated care team—consisting of your primary care provider, Health Coach, and other </p>
        <p>healthcare professionals—collaborates with you, your family, your supporters, and </p>
        <p>specialists to ensure the highest quality of care. We take the time to understand <br/>your unique goals and challenges, empowering you to achieve your healthiest life.</p>
      </div>
      <Longerappointment />
     <div className="healthnet-exceptional"><h1>Exceptional primary care for all ages</h1>
     <p>At One Medical, we prioritize listening to you, valuing your perspective, and providing holistic care. We treat patients of all ages, addressing everything from minor illnesses to chronic conditions and mental health needs. With over 125 locations nationwide, you can access quality care wherever you are.</p>
     </div>
     <Service/>
     <div className="redyto-schedule">
    <h1>Ready to schedule an appointment?</h1>
    <button className="getstarted-btn">Get started</button>
     </div>
    </>
  );
};

export default Adults65;
