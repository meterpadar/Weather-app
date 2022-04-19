const apiKey = '';

export const currentLocationResponseData = async () => { 
	const response = await fetch(`https://api.ipregistry.co/?key=${apiKey}`);
	const json = await response.json();
	return json;
};