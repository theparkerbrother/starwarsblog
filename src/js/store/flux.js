const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [
				//{
				// 	id: "1",
				// 	name: "Luke Skywalker",
				// 	birthYear: "19BBY",
				// 	gender: "male",
				// 	eyeColor: "blue",
				// 	hairColor: "blond",
				// 	height: 172,
				// 	skinColor: "fair",
				// },
			],
			vehicles: [
				{
					id: "1",
					name: "T-65 X-wing starfighter",
					model: "T-65",
					vehicleClass: "Starfighter",
					manufacturer: "Incom Corporation",
					passengers: 1,
					crew: 1,
					cargoCapacity: "50 kg",
				},
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
			  
					// Fetch details for each person in parallel
					const detailedPeople = await Promise.all(
					  data.results.map(async (person) => {
						try {
						  const personResponse = await fetch(person.url);
						  const personData = await personResponse.json();
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
