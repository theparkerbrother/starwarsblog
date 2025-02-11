import React, { useState } from "react";
import { Link } from "react-router-dom";

const PlanetCard = ({ name, climate, population, id }) => {
    // State to track if the item is in the favorites
    const [isFavorited, setIsFavorited] = useState(false);

    // Handle toggle click
    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited); // Toggle the state
        if (!isFavorited) {
            // Add to favorites logic (e.g., add to an array or local storage)
            console.log(`${name} added to favorites`);
        } else {
            // Remove from favorites logic
            console.log(`${name} removed from favorites`);
        }
    };
    
    return (
        <div className="card m-2" style={{ width: "24rem" }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <strong>Climate:</strong> {climate}
                </li>
                <li className="list-group-item">
                    <strong>Population:</strong> {population}
                </li>
                </ul>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <Link to="/learn-more" className="btn btn-secondary">Learn More</Link>
                    <i 
                        className={`fa-heart ${isFavorited ? "fa-solid" : "fa-regular"}`}
                        onClick={handleFavoriteClick}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default PlanetCard;