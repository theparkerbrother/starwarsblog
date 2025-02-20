import darthVader from "../../img/darthVader.png";
import React, { useContext, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetail = () => {
  //const [isFavorite, setIsFavorite] = useState(false); // Track favorite status
  const params = useParams();
  const id = params.id;
  const { store, actions } = useContext(Context);
  
  // If the data hasn't loaded yet, show a loading message
  if (!store.planets || store.planets.length === 0) {
    return <div>Loading...</div>;
  }
  
  const planet = store.planets.find((planet) => planet.id.toString() === id);

  if (!planet) {
    return <div>Planet not found!</div>;
  }

  const isFavorite = store.favorites.some(fav => fav.id === id && fav.type === "planet");
  
  // Handle toggle click
  const handleFavoriteClick = async () => {
    const detailLinker = `/planet-detail/${id}`;
    actions.favoriteToggle("planet",id, planet.name, detailLinker);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>{planet.name}</h1>
          <h4>Planet Details</h4>
        </div>  
        <div className="card-body">
          {/* General Info */}
          <h4 className="mt-4">General Info</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Name:</strong> {planet.name}
            </li>
            <li className="list-group-item">
              <strong>Climate:</strong> {planet.climate}
            </li>
            <li className="list-group-item">
              <strong>Gravity:</strong> {planet.gravity}
            </li>
            <li className="list-group-item">
              <strong>Population:</strong> {planet.poplulation}
            </li>
            <li className="list-group-item">
              <strong>Surface Water:</strong> {planet.surface_water}
            </li>
            <li className="list-group-item">
              <strong>terrain:</strong> {planet.terrain}
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

export default PlanetDetail;