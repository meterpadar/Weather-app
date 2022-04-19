import {
  WeatherIconWrapper
} from './../../styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function WeatherIcon({sky}) {
  return (
    <WeatherIconWrapper>
    {
      sky === 'Clouds' ?
      <FontAwesomeIcon 
        icon="fa-solid fa-cloud" 
        size="10x"
        style={{color: '#5959A0'}}
      /> :
      sky === 'Clear' ?
      <FontAwesomeIcon 
        icon="fa-solid fa-sun"
        size="10x"
        style={{color: '#E6BC40'}}
      /> :
      sky === 'Mist' || sky === 'Smoke' || sky === 'Haze' || sky === 'Dust' || sky === 'Fog' || sky === 'Sand' || sky === 'Ash' ?
      <FontAwesomeIcon 
        icon="fa-solid fa-smog" 
        size="10x"
        style={{color: '#5959A0'}}
      /> :
      sky === 'Snow' ?
      <FontAwesomeIcon 
        icon="fa-solid fa-snowflake"
        size="10x"
        style={{color: '#CAFFF2'}}
      /> :
      sky === 'Rain' ?
      <FontAwesomeIcon 
        icon="fa-cloud-showers-heavy"
        size="10x"
        style={{color: '#5959A0'}}
      /> :
      sky === 'Drizzle' ?
      <FontAwesomeIcon 
        icon="fa-solid fa-cloud-rain"
        size="10x"
        style={{color: '#5959A0'}}
      /> :
      sky === 'Thunderstorm' || sky === 'Squall' || sky === 'Tornado' ?
      <FontAwesomeIcon 
        icon="fa-solid fa-cloud-bolt"
        size="10x"
        style={{color: '#5959A0'}}
      /> :
      <FontAwesomeIcon 
        icon="fa-solid fa-cloud-sun" 
        size="10x"
      />
    }
    </WeatherIconWrapper>
  );
}