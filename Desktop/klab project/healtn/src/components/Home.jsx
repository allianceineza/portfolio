import React, { useEffect, useState } from "react";
import "../assets/styles/home.css"; 
import Service from "./Service"; 
import Longerappointment from "./Longerappointment";

const phoneimg = "/imageh/phone2.png"; 

const Phone = [
  {
    id: 1,
    image: "phoneimg",
    title: " phoneimg",
  },
];

const backgroundImages = [
  "/imageh/home2.jpg",
  "/imageh/home4.jpg",
  "/imageh/background1.avif",
  "/imageh/background4.avif",
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="body-container">
      <div className="home-container">
        <div className="background-container" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}>
          <div className="text-content">
            <h1>Welcome to HealthNet</h1>
            <h1>Healthcare just got less painful</h1>
          </div>
        </div>
      </div>
      <Service />
      <div className="getcare">
        <h1>Get care for what we provide</h1>
        <a href="#">See all our services</a>
        <h2>
          Experience exceptional care with your trusted <br />
          hospitals, clinics, and pharmacies
        </h2>
        <p>
          Our practice accepts a variety of major health insurance plans for
          <br />
          scheduled visits, whether in-office or online. Unlike traditional
          <br />
          doctor’s offices, we aim to make your care more <br />
          efficient and pleasant.
        </p>
        <a href="#">
          Verify whether your insurance is included in our network
        </a>
      </div>
      <Longerappointment />

      
      <div className="become-phone">
        <div className="become-member">
        <h1>By becoming a member, you can explore our app to:</h1>
          <div className="member">
            <div>
              <p>
                Get 24/7 on-demand care
                
                nationwide via Video Chat
                
                or Treat Me Now at no extra
                
                cost
              </p>
            </div>
            <div>
              <p>Send and receive secure messages with a provider</p>
            </div>
          </div>

          <div className="member">
            <div>
              <p>
                Easily access your 
                health records and 
                care plans
              </p>
            </div>
            <div>
              <p>
                Request prescription 
                refills and renewals
              </p>
            </div>
          </div>
          <div className="member">
            <p>
              Book an in-person or remote 
              visit in a state where we have 
              offices
            </p>
          </div>
          <a href="Learn more about HealthNet">Learn more about HealthNet</a>
        </div>
        
        <div className="phone-image">
        <img src="/imageh/member2.jpg" alt="Nikubwawe Clinic" /> 
        </div>
      </div>
      <div>
        <div className="getcare"><h1>See what makes HealthNet different</h1></div>
      </div>
    </div>
  );
};

export default Home;