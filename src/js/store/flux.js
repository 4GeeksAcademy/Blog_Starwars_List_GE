
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets:[],
			vehicles:[],
			character:{},
			planet:{},
			vehicle:{},
			fav:[],
			demo: [

				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(data => setStore({characters:data.results}))
				.catch(err => console.error(err))
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(data => setStore({planets:data.results}))
				.catch(err => console.error(err))
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => setStore({vehicles:data.results}))
				.catch(err => console.error(err))
			},
			oneCharacters: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(res => res.json())
				.then(data => setStore({character:data.result}))
				.catch(err => console.error(err))
			},
			onePlanet: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
				.then(res => res.json())
				.then(data => setStore({planet:data.result}))
				.catch(err => console.error(err))
			},	
			oneVehicle: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				.then(res => res.json())
				.then(data => setStore({vehicle:data.result}))
				.catch(err => console.error(err))
			},
			addFavorites(item){
				const store = getStore()
				const favorites = store.fav
				const newFavorites = [...favorites,{name:item,id:favorites.length}]
				setStore({fav:newFavorites})
			},
			deleteFavorites(id){
				const store = getStore()
				const favorites = store.fav
				const editFavorites = favorites.filter((item)=>item.id !== id)
				setStore({fav:editFavorites})
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
