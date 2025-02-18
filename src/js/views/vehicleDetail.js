import darthVader from "../../img/darthVader.png";
import React, { useContext, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const VehicleDetail = () => {
  const [isFavorite, setIsFavorite] = useState(false); // Track favorite status
  const params = useParams();
  const id = params.id;
  const { store, actions } = useContext(Context);
  
  // If the data hasn't loaded yet, show a loading message
  if (!store.vehicles || store.vehicles.length === 0) {
    return <div>Loading...</div>;
  }
  
  const vehicle = store.vehicles.find((vehicle) => vehicle.id.toString() === id);

  if (!vehicle) {
    return <div>Vehicle not found!</div>;
  }

  // Toggle favorite
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // const vehicle = {
  //   name: "T-65 X-wing starfighter",
  //   model: "T-65",
  //   vehicle_class: "Starfighter",
  //   manufacturer: "Incom Corporation",
  //   passengers: 1,
  //   crew: 1,
  //   cargo_capacity: "50 kg",
  // };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>{vehicle.name}</h1>
          <h4>Vehicle Details</h4>
        </div>

        <div className="card-body">
          {/* Manufacturing Info */}
          <h4 className="mt-4">Manufacturing Info</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Name:</strong> {vehicle.name}
            </li>
            <li className="list-group-item">
              <strong>Model:</strong> {vehicle.model}
            </li>
            <li className="list-group-item">
              <strong>Vehicle Class:</strong> {vehicle.vehicle_class}
            </li>
            <li className="list-group-item">
              <strong>Manufacturer:</strong> {vehicle.manufacturer}
            </li>
          </ul>

          {/* Capacity Info */}
          <h4 className="mt-4">Capacity</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Passengers:</strong> {vehicle.passengers}
            </li>
            <li className="list-group-item">
              <strong>Crew:</strong> {vehicle.crew}
            </li>
            <li className="list-group-item">
              <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}
            </li>
          </ul>
        
            {/* Heart Icon to Mark Favorite */}
            <div className="text-right">
            <button className="mt-3 btn btn-outline-secondary" onClick={toggleFavorite}>
              <i className={`me-2 fa-heart ${isFavorite ? 'fa-solid' : 'fa-regular'}`}></i> 
              {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
