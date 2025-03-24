import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsestateHook from "../components/Login.jsx";
import Longerappointment from "./Longerappointment";
import "../assets/Styles/kids.css";

const Kids = () => {
    const [model, setModel] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedFacility, setSelectedFacility] = useState("");
    const [showFacilityOptions, setShowFacilityOptions] = useState(false);
    const navigate = useNavigate();

    const locationsWithFacilities = ["Kigali", "North", "South", "East", "West"];

    const handleLocationChange = (e) => {
        const location = e.target.value;
        setSelectedLocation(location);
        setShowFacilityOptions(locationsWithFacilities.includes(location));
        setSelectedFacility("");
    };

    const handleFacilityChange = (e) => {
        setSelectedFacility(e.target.value);
    };

    useEffect(() => {
        console.log("Selected Location: ", selectedLocation);
        console.log("Selected Facility: ", selectedFacility);

        if (selectedLocation && selectedFacility) {
            if (selectedFacility === "private" && selectedLocation === "Kigali") {
                console.log("Navigating to Kidscare");
                navigate("/Kidscare");
            } else if (selectedFacility === "public" && selectedLocation === "Kigali") {
                console.log("Navigating to Publiccare");
                navigate("/Publiccare");
            }
        }
    }, [selectedLocation, selectedFacility, navigate]);

    return (
        <>
            {/* {model && <UsestateHook closeform={() => setModel(false)} />}  */}

            <div className="kids-container">
                <div className="easy-convenience">
                    <h1>Easy and convenient flu shots for the whole family.</h1>
                    <p>With expert care to ease anxiety and simple in-app booking, flu shots are easy for the whole family. Schedule yours today.</p>
                    <button className="kids-button">Learn more</button>
                    <h9> Have a sponsored membership? <a href="#">click here</a></h9>
                </div>
                <div className="kids-image">
                    <img src="imageh/kids1.jpg" alt="kids" />
                </div>
            </div>

            <div className="select-location">
                <h1>Select your location</h1>
                <select onChange={handleLocationChange} value={selectedLocation}>
                    <option value="">Select location</option>
                    {locationsWithFacilities.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>
            </div>

            {showFacilityOptions && (
                <div className="location-options">
                    <h2>Choose facility type</h2>
                    <select onChange={handleFacilityChange} value={selectedFacility}>
                        <option value="">Select Facility</option>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
            )}

            <Longerappointment />

            <div className="real-lifecare">
                <h1>Real life care for real families</h1>
                <p>Our team of specialists is trained to help reduce anxiety, ensuring a calm and comfortable experience for everyone...</p>
            </div>
        </>
    );
};

export default Kids;
