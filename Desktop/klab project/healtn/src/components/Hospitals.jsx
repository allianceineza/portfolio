import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "../assets/styles/clinics.css";

export const clinicsData = [
  { id: 1, 
    image: "/imageh/CHIK.jpeg",
     name: "CHIK",
     description: "Book now for better health", 
     link: "https://chuk.rw/" },
  { id: 2, 
    image: "/imageh/kacyirupolicehospital.jpeg",
     name: "Kacyiru police hospital", 
     description: "Your health starts here", 
     link: "https://police.gov.rw/media/news-detail/news/a-glance-at-kacyiru-police-hospital-the-quest-to-become-a-referral/" },
  { id: 3, image: "/imageh/kibagabaga hospital.jpeg",
     name: "Kibagabaga hospital", 
     description: "Pharmacy that really delivers", 
     link: "https://www.kibagabagahospital.gov.rw/1/h" },
  { id: 4,
     image: "/imageh/rwanda military hospital.jpeg", 
     name: "Rwanda Military Referral and Teaching Hospital", 
     description: "Book now for better health", 
     link: "https://rwandamilitaryhospital.rw/index.php?id=135" },
  { id: 5,
     image: "/imageh/king faisal.jpeg", 
     name: "King Faisal Hospital", 
     description: "Your health starts here",
      link: "https://kfh.rw/" },
  { id: 6, 
    image: "/imageh/ndera hospital.jpeg",
     name: "Ndera hospital",
      description: "Your health starts here", 
      link: "https://www.nderahospital.rw/" },
  { id: 7, 
    image: "/imageh/masaka hospital.jpeg", 
    name: "Masaka Hospital",
     description: "Your health starts here",
      link: "https://www.masakahospital.gov.rw/" },
  { id: 8,
     image: "/imageh/ruhengeri hospital.jpeg",
      name: "Ruhengeri Referral hospital", 
      description: "Your health starts here", 
      link: "https://www.rrh.gov.rw/" },
  { id: 9, image: "/imageh/butaro hospital.jpeg", 
    name: "Butaro hospital",
     description: "Your health starts here", 
     link: "https://www.butarohospital.gov.rw/" },
];

const Clinic = () => {
//   const navigate = useNavigate();
//   const [hospitals, setHospitals] = useState([]);

//   useEffect(() => {
//     const getHospitals = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/hospital/createhospital");
//         setHospitals(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getHospitals();
//   }, []);

  return (
    <>
      <div className="clinic-care">
        <div className="care-goes">
          <h1>Care that goes wherever you go</h1>
          <p>
            Get 24/7 on-demand virtual care by message or video, included in Membership.
            <br /> Or, book a one-time virtual visit for a flat fee with Pay-per-visit.
          </p>
          <div className="button-container">
            <button className="custom-button">Membership</button>
            <button className="custom-button">Pay-per-visit</button>
          </div>
        </div>
        <div className="caregoes-image">
          <img src="/imageh/onlineservice.webp" alt="Nikubwawe Clinic" />
        </div>
      </div>

      <div className="clinics-container">
        {clinicsData.map((post) => (
          <div key={post.id} className="service">
            <div className="clinics-image">
              <img src={post.image} alt={post.name} />
            </div>
            <div className="descriptions">
              <p>{post.name}</p>
              <p>{post.description}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}

        {/* {hospitals.map((item) => (
          <div key={item.id}>
            <div>{item.hospitalsNames}</div>
            <div>
              <img src={item.image} alt={item.hospitalsNames} />
            </div>
          </div>
        ))} */}

      </div>
    </>
  );
};

export default Clinic;
