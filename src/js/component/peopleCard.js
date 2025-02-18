import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { useEffect } from "react/cjs/react.production.min";

const PeopleCard = ({ name, gender, hairColor, eyeColor, id, isFavorite, favoriteToggle }) => {    
    // State to track if the item is in the favorites
    const [isFavorited, setIsFavorited] = useState(isFavorite);

    useEffect(() => {
        setIsFavorited(isFavorite);
    }, [isFavorite]);

    // Handle toggle click
    const handleFavoriteClick = () => {
        favoriteToggle("person",id);
    };
    
    return (
        <div className="card m-2" style={{ width: "24rem" }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <strong>Gender:</strong> {gender}
                </li>
                <li className="list-group-item">
                    <strong>Hair Color:</strong> {hairColor}
                </li>
                <li className="list-group-item">
                    <strong>Eye Color:</strong> {eyeColor}
                </li>
                </ul>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <Link to={`/people-detail/${id}`} className="btn btn-secondary">Learn More</Link>
                    <i 
                        className={`fa-heart ${isFavorited ? "fa-solid" : "fa-regular"}`}
                        onClick={handleFavoriteClick}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default PeopleCard;
