// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2a6df84e2msh5570394e585775bp18e3ffjsnd13d0319a4fe',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// adminDivisions

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

export const WEATHER_API_KEY = "c0a8d8b2dbc593bee0c194849172699b";