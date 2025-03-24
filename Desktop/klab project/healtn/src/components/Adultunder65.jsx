import React, { useState, useEffect } from "react";
import "../assets/Styles/adult-under65.css"; 
import HealthcareServicesTable from "./Healthcare serviceTable";

const images = [
  "/imageh/home1.jpg",
  "/imageh/home2.jpg",
  "/imageh/home3.jpg",
  "/imageh/home4.jpg"
];

const Adultunder65 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="background-slider"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`
        }}
      />
      
      <div className="Tailored-Healthcare">
        <h1>Tailored Healthcare Solutions for <br/>Adults Under 65</h1>
        <p>
          Experience a transformative approach to primary care with HealthNet. 
          Our membership-based model, priced at just $199 annually, offers you exclusive 
          access to personalized health services designed around your needs. 
          Seamlessly integrated with your insurance, our services make managing your 
          health easier, faster, and more efficient. Your membership continues 
          until canceled, ensuring uninterrupted care.
        </p>
      </div>

      <HealthcareServicesTable/>

      <div className="seewhat-makes">
        See what makes HealthNet different
      </div>
    </>
  );
};

export default Adultunder65;
