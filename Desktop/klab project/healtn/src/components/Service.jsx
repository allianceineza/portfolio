import React from "react";
import "../assets/styles/service.css";
import { useNavigate } from 'react-router-dom';


const public_hospitals = "/imageh/public hospitals.jpg";
const home3 = "/imageh/home3.jpg";
const home7 = "/imageh/home7.jpg";


export const serviceData = [
    {
        id: 1,
        image: public_hospitals,
        title: "public hospitals",
        description: "book now for better healthy",
        link: "http://localhost:5173/hospitals"
    },
    {
        id: 2,
        image: home3,
        title: " private clinics",
        description: "your healthy start here",
        link: "http://localhost:5173/clinics"
    },
    {
        id: 3,
        image: home7,
        title: "pharmacy",
        description: "pharmacy the really delivers",
        link: "http://localhost:5173/clinics"
    },
];

const Service = () => {
    const navigate = useNavigate();

    // Handle navigation to the single product detail page
    const handleNavigate = (id) => {
        navigate(`/singlecard/${id}`);
    };

    return (
        <div className="home-service">
            {serviceData.map((post) => (
                <div key={post.id} className="service">
                    <div className="home-image">
                        <img src={post.image} alt={post.description} />
                    </div>
                    <div className="descriptions">
                        <p>{post.title}</p>  
                        <p>{post.description}</p>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
                        {/* <a 
                            href="#" 
                            className="read-more" 
                            onClick={(e) => { 
                                e.preventDefault(); 
                                handleNavigate(post.id);
                            }}
                        >
                            Read more
                        </a>  */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Service;
