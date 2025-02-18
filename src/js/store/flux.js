const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [
				//{
					// id: person.uid,
					// name: personData.result.properties.name,
					// birthYear: personData.result.properties.birth_year,
					// gender: personData.result.properties.gender,
					// eyeColor: personData.result.properties.eye_color,
					// hairColor: personData.result.properties.hair_color,
					// height: personData.result.properties.height,
					// skinColor: personData.result.properties.skin_color,
					// homeworld: personData.result.properties.homeworld,
				// },
			],
			vehicles: [
				// {
				// 	"model": "Digger Crawler",
				// 	"vehicle_class": "wheeled",
				// 	"manufacturer": "Corellia Mining Corporation",
				// 	"cost_in_credits": "150000",
				// 	"length": "36.8 ",
				// 	"crew": "46",
				// 	"passengers": "30",
				// 	"max_atmosphering_speed": "30",
				// 	"cargo_capacity": "50000",
				// 	"consumables": "2 months",
				// 	"name": "Sand Crawler",
				// 	"url": "https://www.swapi.tech/api/vehicles/4"
				// },
			],
			planets: [
				{
					id: "1",
					name: "Tatooine",
					climate: "19BBY",
					gravity: "male",
					poplulation: "blue",
					surface_water: "blond",
					terrain: 172,
				},
			],
		},
		actions: {
			// Get all people from first page
			fetchPeople: async () => {
				let allPeople = [];
				const totalPages = 9; // Total pages from the API
			  
				// Loop through all pages
				for (let page = 1; page <= 1; page++) {
				  try {
					const response = await fetch(`https://www.swapi.tech/api/people?page=${page}`);
					const data = await response.json();
					//console.log("People Data is",data);
			  
					// Fetch details for each person in parallel
					const detailedPeople = await Promise.all(
					  data.results.map(async (person) => {
						try {
						  const personResponse = await fetch(person.url);
						  const personData = await personResponse.json();
						  //console.log("Person Data:",personData);
						  return {
							id: person.uid,
							name: personData.result.properties.name,
							birthYear: personData.result.properties.birth_year,
							gender: personData.result.properties.gender,
							eyeColor: personData.result.properties.eye_color,
							hairColor: personData.result.properties.hair_color,
							height: personData.result.properties.height,
							skinColor: personData.result.properties.skin_color,
							homeworld: personData.result.properties.homeworld,
						  };
						} catch (err) {
						  console.error(`Error fetching details for ${person.name}:`, err);
						  return null; // Return null if an error occurs
						}
					  })
					);
			  
					// Filter out any null values (failed fetches)
					allPeople = [...allPeople, ...detailedPeople.filter(Boolean)];
			  
					console.log(`Fetched page ${page}:`, detailedPeople);
			  
				  } catch (err) {
					console.error(`Error fetching page ${page}:`, err);
				  }
				}
			  
				// Update the store with detailed people data
				console.log("All people with details:", allPeople);
				setStore({ people: allPeople });
			  },


			// Get all Vehicles from first page
			fetchVehicles: async () => {
				let allVehicles = [];
				//const totalPages = 9; // Total pages from the API
			  
				// Loop through all pages
				for (let page = 1; page <= 1; page++) {
				  try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles?page=${page}`);
					const data = await response.json();
					//console.log("Vehicles Data is",data);
			  
					// Fetch details for each vehicle in parallel
					const detailedVehicle = await Promise.all(
					  data.results.map(async (vehicle) => {
						try {
						  const vehicleResponse = await fetch(vehicle.url);
						  const vehicleData = await vehicleResponse.json();
						  //console.log("Vehicle Data:",vehicleData);
						  return {
							id: vehicle.uid,
							name: vehicleData.result.properties.name,
							model: vehicleData.result.properties.model,
							vehicle_class: vehicleData.result.properties.vehicle_class,
							manufacturer: vehicleData.result.properties.manufacturer,
							cost_in_credits: vehicleData.result.properties.cost_in_credits,
							length: vehicleData.result.properties.length,
							crew: vehicleData.result.properties.crew,
							passengers: vehicleData.result.properties.passengers,
							max_atmosphering_speed: vehicleData.result.properties.max_atmosphering_speed,
							cargo_capacity: vehicleData.result.properties.cargo_capacity,
							consumables: vehicleData.result.properties.consumables,
							url: vehicleData.result.properties.url
						  };
						} catch (err) {
						  console.error(`Error fetching details for ${vehicle.name}:`, err);
						  return null; // Return null if an error occurs
						}
					  })
					);
			  
					// Filter out any null values (failed fetches)
					allVehicles = [...allVehicles, ...detailedVehicle.filter(Boolean)];
			  
					console.log(`Fetched page ${page}:`, detailedVehicle);
			  
				  } catch (err) {
					console.error(`Error fetching page ${page}:`, err);
				  }
				}
			  
				// Update the store with detailed people data
				console.log("All vehicles with details:", allVehicles);
				setStore({ vehicles: allVehicles });
			},
			  
			// Get all Vehicles from first page
			fetchPlanets: async () => {
				let allPlanets = [];
				//const totalPages = 9; // Total pages from the API
			  
				// Loop through all pages
				for (let page = 1; page <= 1; page++) {
				  try {
					const response = await fetch(`https://www.swapi.tech/api/planets?page=${page}`);
					const data = await response.json();
					//console.log("Planets Data is",data);
			  
					// Fetch details for each planet in parallel
					const detailedPlanet = await Promise.all(
					  data.results.map(async (planet) => {
						try {
						  const planetResponse = await fetch(planet.url);
						  const planetData = await planetResponse.json();
						  //console.log("Planet Data:",planetData);
						  return {
							id: planet.uid,
							climate: planetData.result.properties.climate,
							diameter: planetData.result.properties.diameter,
							gravity: planetData.result.properties.gravity,
							name: planetData.result.properties.name,
							orbital_period: planetData.result.properties.orbital_period,
							population: planetData.result.properties.population,
							rotation_period: planetData.result.properties.rotation_period,
							surface_water: planetData.result.properties.surface_water,
							cargo_capacity: planetData.result.properties.cargo_capacity,
							terrain: planetData.result.properties.terrain,
							url: planetData.result.properties.url
						  };
						} catch (err) {
						  console.error(`Error fetching details for ${planet.name}:`, err);
						  return null; // Return null if an error occurs
						}
					  })
					);
			  
					// Filter out any null values (failed fetches)
					allPlanets = [...allPlanets, ...detailedPlanet.filter(Boolean)];
			  
					console.log(`Fetched page ${page}:`, detailedPlanet);
			  
				  } catch (err) {
					console.error(`Error fetching page ${page}:`, err);
				  }
				}
			  
				// Update the store with detailed people data
				console.log("All Planets with details:", allPlanets);
				setStore({ planets: allPlanets });
			},
			
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
