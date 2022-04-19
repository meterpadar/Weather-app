import {
  PreWeatherInfo,
  WeatherSky,
  WeatherInfoWrapper,
  WeatherMainTemp,
  WeatherTempsWrapper,
  WeatherTemps,
  CityName,
  CurrentDate
} from './../../styles.js';
import { WeatherIcon } from './../WeatherIcon/WeatherIcon.js';
import { daysInWeek } from './../../data/daysInWeek.js';
import { monthsInYear } from './../../data/monthsInYear.js';

export function WeatherInfo({weatherData}) {
  const date = new Date();

  const currDate = `${daysInWeek[date.getDay()]} ${date.getDate()} ${monthsInYear[date.getMonth()]} ${date.getFullYear()}`;

  return (
    <WeatherInfoWrapper>
      <CityName>
        {!weatherData.city ? null : weatherData.city}
      </CityName>
      <CurrentDate>
        {!weatherData.city ? null : currDate}
      </CurrentDate>
      <WeatherIcon 
        sky={weatherData.sky}
      />
      {
        !weatherData.city ?
        <PreWeatherInfo>
          {!weatherData.temp ? 'enter the city' : weatherData.temp}
        </PreWeatherInfo> :
        <>
          <WeatherMainTemp>
            {weatherData.temp}
          </WeatherMainTemp>
          <WeatherSky>
            {weatherData.sky}
          </WeatherSky>
          <WeatherTempsWrapper>
            <WeatherTemps>
              {`Low: ${weatherData.minTemp}`}
            </WeatherTemps>
            <WeatherTemps>
             {`High: ${weatherData.maxTemp}`}
            </WeatherTemps>
          </WeatherTempsWrapper>
        </>
      }
    </WeatherInfoWrapper>
  );
}

