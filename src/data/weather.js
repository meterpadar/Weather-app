const apiKey = '';

export const weatherResponseData = async (cityName) => { 
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
	const json = await response.json();
	return json;
};

export const myCityWeatherResponseData = async (cityId) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`);
    const json = await response.json();
    return json;
  }