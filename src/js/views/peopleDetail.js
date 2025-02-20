import darthVader from "../../img/darthVader.png";
import React, { useContext, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PeopleDetail = () => {
  const params = useParams();
  const id = params.id;
  const { store, actions } = useContext(Context);
  
  // If the data hasn't loaded yet, show a loading message or spinner
  if (!store.people || store.people.length === 0) {
    return <div>Loading...</div>;
  }
  
  const person = store.people.find((person) => person.id.toString() === id);

  if (!person) {
    return <div>Person not found!</div>;
  }

  const isFavorite = store.favorites.some(fav => fav.id === id && fav.type === "person");

  // Handle toggle click
  const handleFavoriteClick = async () => {
    const detailLink = `/people-detail/${id}`;
    actions.favoriteToggle("person",id, person.name, detailLink);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>{person.name}</h1>
          <h4>People Details</h4>
        </div>

        <div className="card-body">
          {/* General Info */}
          <h4 className="mt-4">General Info</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Name:</strong> {person.name}
            </li>
            <li className="list-group-item">
              <strong>Birth Year:</strong> {person.birthYear}
            </li>
            <li className="list-group-item">
              <strong>Gender:</strong> {person.gender}
            </li>
            <li className="list-group-item">
              <strong>Eye Color:</strong> {person.eyeColor}
            </li>
            <li className="list-group-item">
              <strong>Hair Color:</strong> {person.hairColor}
            </li>
            <li className="list-group-item">
              <strong>Height:</strong> {person.height} cm
            </li>
            <li className="list-group-item">
              <strong>Skin Color:</strong> {person.skinColor}
            </li>
          </ul>
          {/* Heart Icon to Mark Favorite */}
          <div className="text-right">
            <button className={`mt-3 btn ${isFavorite ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={handleFavoriteClick}>
              <i className={`me-2 fa-heart ${isFavorite ? 'fa-solid' : 'fa-regular'}`}></i> 
              {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetail;
