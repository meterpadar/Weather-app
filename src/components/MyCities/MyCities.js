import { useState } from 'react';
import {
  MyCitiesWrapper,
  MyCitiesLi,
  MyCityButton,
  MyCitiesRemoveButton,
  MyCitiesToggleButton
} from './../../styles.js';
import { selectCities, removeCity } from './../../slices/citiesSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { myCityWeatherResponseData } from './../../data/weather.js'

export function MyCities({register, setWeatherData}) {
  const cities = useSelector(selectCities);
  const dispatch = useDispatch();

  const [toggleCities, setToggleCities] = useState(false);

  const onToggleCities = () => {
    !toggleCities ?
    setToggleCities(true) :
    setToggleCities(false);
  };

  const onRemoveCity = (cityId) => {
    dispatch(removeCity({
      cityId: cityId
    }))
  };

  const getMyCityWeatherData = (cityId) => {
    myCityWeatherResponseData(cityId)
      .then(data => {
        console.log(data);

        setWeatherData({
            temp: `${Math.round(data.main.temp - 273.15)} °C`,
            city: `${data.name}, ${data.sys.country}`,
            cityId: data.id,
            minTemp: `${Math.round(data.main.temp_min - 273.15)} °C`,
            maxTemp: `${Math.round(data.main.temp_max - 273.15)} °C`,
            sky: data.weather[0].main
          });
      });
  }

  return (
    <MyCitiesWrapper>
      {
        !toggleCities ?
        <MyCitiesLi>
          <MyCitiesToggleButton
            onClick={onToggleCities}
            type='button'
          >
            My Cities
          </MyCitiesToggleButton>
        </MyCitiesLi> :
        <>
          <MyCitiesLi>
            <MyCitiesToggleButton
              onClick={onToggleCities}
              type='button'
            >
              <FontAwesomeIcon 
                icon="fa-solid fa-xmark"
              />
            </MyCitiesToggleButton>
          </MyCitiesLi>
          {
            Object.entries(cities).map((city, n) => (
              <MyCitiesLi 
                key={n}
              >
                <MyCityButton
                  onClick={() => getMyCityWeatherData(city[0])}
                  type='button'
                >
                  {city[1]}
                </MyCityButton>
                <MyCitiesRemoveButton
                  onClick={() => onRemoveCity(city[0])}
                  type='button'
                >
                  <FontAwesomeIcon 
                    icon="fa-solid fa-circle-minus" 
                  />
                </MyCitiesRemoveButton>
              </MyCitiesLi>
            ))
          }
        </>
      }
    </MyCitiesWrapper>
  );
}