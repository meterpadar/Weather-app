import {
  SearchWrapper,
  SearchBarInput,
  CurrentLocationButton
} from './../../styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { currentLocationResponseData } from './../../data/location.js';

export function Search({getWeatherData, register}) {
  const getCurrentLocationData = () => {
    currentLocationResponseData()
      .then(data => {
        getWeatherData(data.location.city);
      });
  };

  return (
    <SearchWrapper>
      <SearchBarInput
        type='text'
        placeholder="City" 
        {...register("city")} 
      />
      <CurrentLocationButton
        type='button'
        onClick={getCurrentLocationData}
      >
        <FontAwesomeIcon 
          icon="fa-solid fa-location-crosshairs" 
        />
      </CurrentLocationButton>
    </SearchWrapper>
  );
}
