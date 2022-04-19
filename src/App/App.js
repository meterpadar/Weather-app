/** @jsxImportSource @emotion/react */
import { css, jsx, ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { WeatherInfo } from './../components/WeatherInfo/WeatherInfo.js';
import { ThemeChange } from './../components/ThemeChange/ThemeChange.js';
import { Search } from './../components/Search/Search.js';
import { SaveCity } from './../components/SaveCity/SaveCity.js';
import { MyCities } from './../components/MyCities/MyCities.js';
import {
  SearchBarFrom,
  SubmitFormButton,
  SaveCityAndThemeChangeWrapper,
  SearchMyCitiesWrapper
} from './../styles.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloudSun, faCloud, faCloudBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSmog, faSun, faMoon, faLocationCrosshairs, faXmark, faCircleMinus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { weatherResponseData } from './../data/weather.js';

function App() {
  library.add(faCloudSun, faCloud, faCloudBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSmog, faSun, faMoon, faLocationCrosshairs, faXmark, faCircleMinus, faCheck);

  const theme = {
    day: {
      background: 'linear-gradient(90deg, rgba(72,205,255,1) 0%, rgba(152,215,255,1) 51%, rgba(110,162,255,1) 100%)'
    },
    night: {
      background: 'linear-gradient(90deg, rgba(1,0,31,1) 0%, rgba(0,66,73,1) 51%, rgba(0,43,82,1) 100%)'
    }
  };

  const [weatherData, setWeatherData] = useState({
    city: '',
    cityId: '',
    temp: '',
    minTemp: '',
    maxTemp: '',
    sky: ''
  });

  const [currTheme, setCurrTheme] = useState('');

  const { 
    register, 
    handleSubmit
  } = useForm();

  const getWeatherData = (city) => {
    weatherResponseData(city)
      .then(data => {
        console.log(data);

        data.message ?
        setWeatherData({
          temp: data.message,
          city: '',
          cityId: '',
          minTemp: '',
          maxTemp: '',
          sky: ''
        }) :
        setWeatherData({
          temp: `${Math.round(data.main.temp - 273.15)} °C`,
          city: `${data.name}, ${data.sys.country}`,
          cityId: data.id,
          minTemp: `${Math.round(data.main.temp_min - 273.15)} °C`,
          maxTemp: `${Math.round(data.main.temp_max - 273.15)} °C`,
          sky: data.weather[0].main
        });
      });
  };

  const onSearch = value => {
    getWeatherData(value.city);
  };

  return (
    <ThemeProvider theme={theme}>
      <main
        css={() => ({
          background: 
            currTheme === 'right' ?
            theme.night.background :
            currTheme === 'left' ?
            theme.day.background :
            theme.night.background,
          color: '#ffffff',
          minHeight: '100%'
        })}
      >
        <SearchBarFrom
          onSubmit={
            handleSubmit(data => {
              console.log(data);
              onSearch(data);
            })
          }
        >
        <SearchMyCitiesWrapper>
          <Search 
            getWeatherData={getWeatherData}
            register={register}
          />
          <MyCities 
            register={register}
            setWeatherData={setWeatherData}
          />
        </SearchMyCitiesWrapper>
          <WeatherInfo 
            weatherData={weatherData}
          />
          <SubmitFormButton
            type='submit'
          >
            enter
          </SubmitFormButton>
        </SearchBarFrom>
        <SaveCityAndThemeChangeWrapper>
          <SaveCity 
            city={weatherData.city}
            cityId={weatherData.cityId}
          />
          <ThemeChange 
            currTheme={currTheme}
            setCurrTheme={setCurrTheme}
          />
        </SaveCityAndThemeChangeWrapper>
      </main>
    </ThemeProvider>
  );
}

export default App;
