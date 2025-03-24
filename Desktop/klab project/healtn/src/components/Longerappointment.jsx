import React from "react";
import "../assets/styles/service.css";
import { useNavigate } from 'react-router-dom';


const home5 = "/imageh/home5.jpg";
const home6 = "/imageh/home6.jpg";
const pharmacy1 = "/imageh/pharmacy1.jpg";
const home8 = "/imageh/home8.jpg";
const partnership2 ="/imageh/partnership2.webp";
const services = "/imageh/services.webp";



export const Longerappointment = [
    {
        id: 1,
        image: home5,
        description: "We help patients easily find the right hospital for their needs. Our platform provides reliable information on available healthcare facilities, ensuring you make an informed choice."
    },
    {
        id: 2,
        image: home6,
        description: "Nurturing medical specialists committed to quality care."
    },
    {
        id: 3,
        image: pharmacy1,
        description: "Visit our office for lab services and save on additional expenses"
    },
    {
        id: 4,
        image: home8,
        description: "Explore hospitals that offer a wide range of healthcare services. Our platform helps you find the right facility to meet your specific needs."
    },
    {
        id: 5,
        image: services,
        description: "Primary care services available in multiple cities across Rwanda"
    },
    {
        id: 6,
        image: partnership2,
        description: "Enjoy longer partnership times, allowing you to feel relaxed and unhurried during your visit."
    },
];

const Longer = () => {
    const navigate = useNavigate();

   
    const handleNavigate = (id) => {
        navigate(`/singlecard/${id}`);
    };

    return (
        <div className="home-service">
            {Longerappointment.map((post) => (
                <div key={post.id} className="service">
                    <div className="home-image">
                        <img src={post.image} alt={post.description} />
                    </div>
                    <div className="descriptions">
                        <p>{post.title}</p>  
                        <p>{post.description}</p>
                        <a 
                            href="#" 
                            className="read-more" 
                            onClick={(e) => { 
                                e.preventDefault(); 
                                handleNavigate(post.id);
                            }}
                        >
                            Read more
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Longer;
