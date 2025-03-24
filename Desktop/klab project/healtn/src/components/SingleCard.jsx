import React from "react";
import { useParams } from "react-router-dom";

const SingleCard = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Service Details</h2>
            <p>Showing details for service ID: {id}</p>
        </div>
    );
};

export default SingleCard;
