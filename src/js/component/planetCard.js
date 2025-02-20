import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCard = ({ name, climate, population, id, isFavorite, favoriteToggle }) => {
    const { store, actions } = useContext(Context);

    // State to track if the item is in the favorites
    //const [isFavorited, setIsFavorited] = useState(false);
    const isFavorited = store.favorites.some(fav => fav.id === id && fav.type === "planet");

    useEffect(() => {
        //console.log("updated favorites list (from within vehicle card):",store.favorites);
    }, [store.favorites]);

    // Handle toggle click
    const handleFavoriteClick = () => {
        const detailLink = `/planet-detail/${id}`;
        actions.favoriteToggle("planet", id, name, detailLink);
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
                    <Link to={`/planet-detail/${id}`} className="btn btn-secondary">Learn More</Link>
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