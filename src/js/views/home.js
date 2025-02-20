import React, { useContext, useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import darthVader from "../../img/darthVader.png";
import "../../styles/home.css";
import PeopleCard from "../component/peopleCard";
import VehicleCard from "../component/vehicleCard";
import PlanetCard from "../component/planetCard";
import { Context } from "../store/appContext";
//import { useEffect } from "react/cjs/react.production.min";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	if (!store.people || store.people.length === 0) {
		return <div>Loading...</div>;
	}

	const activeTab = store.activeTab;

	const updateActiveTab = (activeTab) => {
		store.activeTab = activeTab;
	};

	return (
		<div className="container mt-4">
			{/* <!-- Nav Tabs --> */}
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<button 
						className={`nav-link ${activeTab === "people" ? "active": ""}`}  
						id="people-tab" 
						data-bs-toggle="tab" 
						data-bs-target="#people" 
						type="button" role="tab" 
						aria-controls="people" 
						aria-selected="true"
						onClick={(e) => updateActiveTab("people")}
						>
							People
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className={`nav-link ${activeTab === "vehicles" ? "active": ""}`} id="vehicles-tab" data-bs-toggle="tab" data-bs-target="#vehicles" type="button" role="tab" aria-controls="vehicles" aria-selected="false" onClick={(e) => updateActiveTab("vehicles")}>Vehicles</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className={`nav-link ${activeTab === "planets" ? "active": ""}`} id="planets-tab" data-bs-toggle="tab" data-bs-target="#planets" type="button" role="tab" aria-controls="planets" aria-selected="false" onClick={(e) => updateActiveTab("planets")}>Planets</button>
				</li>
			</ul>

			{/* <!-- Tab Content --> */}
			<div className="tab-content mt-3" id="myTabContent">
				<div className={`tab-pane fade ${activeTab === "people" ? "show active": ""}`} id="people" role="tabpanel" aria-labelledby="people-tab">
					<div className="d-flex flex-wrap justify-content-start">
						{store.people.map((person) => {
							const isFavorite = store.favorites.some(
								favorite => favorite.type === "people" && favorite.id === person.id
							);
							return (
								<PeopleCard
									key={person.id}
									id={person.id}
									name={person.name}
									gender={person.gender}
									hairColor={person.hairColor}
									eyeColor={person.eyeColor}
									isFavorite={isFavorite}
									favoriteToggle={actions.favoriteToggle}
								/>
							);
						})}
					</div>															
				</div>
				<div className={`tab-pane fade ${activeTab === "vehicles" ? "show active": ""}`} id="vehicles" role="tabpanel" aria-labelledby="vehicles-tab">
					{/* <VehicleCard
						name={'Sand Crawler'}
						crew={'46'}
						passengers={'30'}
					/> */}
					<div className="d-flex flex-wrap justify-content-start">
						{store.vehicles.map((vehicle) => (
							<VehicleCard
								key={vehicle.id}
								id={vehicle.id}
								name={vehicle.name}
								crew={vehicle.crew}
								passengers={vehicle.passengers}
							/>
						))}
					</div>
				</div>
				<div className={`tab-pane fade ${activeTab === "planets" ? "show active": ""}`} id="planets" role="tabpanel" aria-labelledby="planets-tab">
					{/* <PlanetCard
						name={'Tatooine'}
						climate={'Arid'}
						population={'120000'}
					/> */}
					<div className="d-flex flex-wrap justify-content-start">
						{store.planets.map((planet) => (
							<PlanetCard
								key={planet.id}
								id={planet.id}
								name={planet.name}
								climate={planet.climate}
								population={planet.population}
								isFavorite={planet.isFavorite}
								favoriteToggle={actions.favoriteToggle}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
