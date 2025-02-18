import React from "react";
import { Link } from "react-router-dom";

const PlanetCard = ({ name, climate, population, id, isFavorite, favoriteToggle }) => {
    
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
                    <Link to={`/planet-detail/${id}`} className="btn btn-secondary">Learn More</Link>
                    <i 
                        className={`fa-heart ${isFavorite ? "fa-solid" : "fa-regular"}`}
                        onClick={() => favoriteToggle("planet", id)}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default PlanetCard;