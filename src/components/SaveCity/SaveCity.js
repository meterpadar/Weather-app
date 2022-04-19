import {
  SaveCityButton
} from './../../styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { saveCity, selectCities } from './../../slices/citiesSlice.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SaveCity({city, cityId}) {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);

  const onSaveCity = () => {
    dispatch(saveCity({
      cityId: cityId,
      cityName: city
    }))
  };

  const cityIncluded = Object.entries(cities).map((city) => city[0]).includes(cityId.toString());

  return (
    <SaveCityButton
      style={
        !city ?
        {display: 'none'} :
        {display: 'initial'}
      }
      onClick={onSaveCity}
    >
    {
      !cityIncluded ? 
      'Save city' : 
      <FontAwesomeIcon 
        icon="fa-solid fa-check"
        style={{color: '#00CC66'}} 
      />
    }
    </SaveCityButton>
  );
}