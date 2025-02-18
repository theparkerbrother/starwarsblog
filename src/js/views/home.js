import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import darthVader from "../../img/darthVader.png";
import "../../styles/home.css";
import PeopleCard from "../component/peopleCard";
import VehicleCard from "../component/vehicleCard";
import PlanetCard from "../component/planetCard";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	if (!store.people || store.people.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container mt-4">
			{/* <!-- Nav Tabs --> */}
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<button className="nav-link active" id="people-tab" data-bs-toggle="tab" data-bs-target="#people" type="button" role="tab" aria-controls="people" aria-selected="true">People</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link" id="vehicles-tab" data-bs-toggle="tab" data-bs-target="#vehicles" type="button" role="tab" aria-controls="vehicles" aria-selected="false">Vehicles</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link" id="planets-tab" data-bs-toggle="tab" data-bs-target="#planets" type="button" role="tab" aria-controls="planets" aria-selected="false">Planets</button>
				</li>
			</ul>

			{/* <!-- Tab Content --> */}
			<div className="tab-content mt-3" id="myTabContent">
				<div className="tab-pane fade show active" id="people" role="tabpanel" aria-labelledby="people-tab">
					<div className="d-flex flex-wrap justify-content-start">
						{store.people.map((person) => (
							<PeopleCard
								key={person.id}
								id={person.id}
								name={person.name}
								gender={person.gender}
								hairColor={person.hairColor}
								eyeColor={person.eyeColor}
							/>
						))}
					</div>															
				</div>
				<div className="tab-pane fade" id="vehicles" role="tabpanel" aria-labelledby="vehicles-tab">
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
				<div className="tab-pane fade" id="planets" role="tabpanel" aria-labelledby="planets-tab">
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
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
