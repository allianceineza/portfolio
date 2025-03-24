import React, { useState, useEffect } from "react";
import "../assets/Styles/mentalheallth.css"; 

const images = [
  "/imageh/background1.avif",
  "/imageh/background4.avif",
  "/imageh/home2.jpg",
  "/imageh/home4.jpg"
];


const home5 = "/imageh/rbc.jpg";
const home6 = "/imageh/mini_health.jpeg";
const home7 = "/imageh/rssb.jpeg";


export const Wecanhelp=[
    {
      id: 1,
      title: "RBC",
      description: "your care belongs here",
      image: "/imageh/rbc.jpg", 
      link: "https://rbc.gov.rw/"
    },
    {
      id: 2,
      title: "Minister of Health",
      description: "Always there for you",
      image: "/imageh/mini_health.jpeg", 
      link: "https://www.moh.gov.rw/"
    },
    {
      id: 3,
      title: "RSSB",
      description: "  Everywhere",
      image: "/imageh/rssb.jpeg", 
      link: "https://www.rssb.rw/"
    },
  
    {
      id: 4,
      title: "masaka hospital",
      description: "your care belongs here",
      image: "/imageh/masaka hospital.jpeg", 
    },
    {
      id: 5,
      title: "Ndera hospital",
      description: "Always there for you",
      image: "/imageh/ndera hospital.jpeg", 
    },
    {
      id: 6,
      title: "king faisal hospital",
      description: "  Everywhere",
      image: "/imageh/king faisal.jpeg", 
    },
    {
      id: 7,
      title: "Optica_trm clinic",
      description: "Always there for you",
      image: "/imageh/Optica_TRM.webp", 
    },
    {
      id: 8,
      title: "mercy medical clinic",
      description: "Always there for you",
      image: "/imageh/mercy medical clinic.jpeg", 
    },
  
  ];


const Mentalhealth = () => {
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
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
        <div className="text-content">
        <h1>Join today for exclusive hosting benefits and resources</h1>
        <button>join now and let's tolk</button>
      </div>
      <div className="howwecan-help">
      <h1>our member </h1> </div>

    <div className="howwecanhelp-container">
   
                   {Wecanhelp.map((post) => (
                    
                    
                             
                      <div key={post.id} className="wecan-help">
                        <div className="wecanhelpprofile-container">
                      <div className="wecanhelp-image">
                          <img src={post.image} alt={post.description} />
                      </div></div>
                      <div className="wecanhelp-descriptions">
                          <h4>{post.title}</h4>  
                          <p>{post.description}</p>
                          </div> </div>
            ))}
       
        </div>
        
     
        </>
    );
};
      
     
    
      


export default Mentalhealth;
