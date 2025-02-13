import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlanetDetail = () => {
    const [isFavorite, setIsFavorite] = useState(false); // Track favorite status
    const planet = {
      name: "Tatooine",
      climate: "19BBY",
      gravity: "male",
      poplulation: "blue",
      surface_water: "blond",
      terrain: 172,
    };
  
    // Toggle favorite
    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
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
              <button className={`mt-3 btn ${isFavorite ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={toggleFavorite}>
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