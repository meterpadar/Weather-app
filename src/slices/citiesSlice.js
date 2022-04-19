import { createSlice } from '@reduxjs/toolkit';

export const citiesSlice = createSlice({
	name: 'cities',
	initialState: {},
	reducers: {
		saveCity: (state, action) => {
			const { cityId, cityName } = action.payload;

			state[cityId] = cityName;
		},

		removeCity: (state, action) => {
			const { cityId } = action.payload;

			delete state[cityId];
		}
	}
});

export const selectCities = (state) => state.cities;
export const { saveCity, removeCity } = citiesSlice.actions;
export default citiesSlice.reducer;