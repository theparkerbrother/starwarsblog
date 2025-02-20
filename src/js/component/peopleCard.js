import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PeopleCard = ({ name, gender, hairColor, eyeColor, id, isFavorite }) => {    
    const { store, actions } = useContext(Context);

    // State to track if the item is in the favorites
    const isFavorited = store.favorites.some(fav => fav.id === id && fav.type === "person");

    useEffect(() => {
        //console.log("updated favorites list (from within people card):",store.favorites);
    }, [store.favorites]);


    // Handle toggle click
    const handleFavoriteClick = async () => {
        const detailLink = `/people-detail/${id}`;
        actions.favoriteToggle("person",id, name, detailLink);
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
