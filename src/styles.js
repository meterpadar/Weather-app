import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/react';
import facepaint from 'facepaint';

const breakpoints = [650];

const mq = facepaint(
	breakpoints.map(bp => `@media (min-width: ${bp}px)`)
);

//Form

export const SearchBarFrom = styled.form`
	padding: 0;
	display: flex;
	flex-direction: column;
	text-align: center;
`

//Search Bar

export const SearchBarInput = styled.input`
	font-size: 24px;
	border-radius: 20px;
	padding: 5px 10px;
	border: none;
	outline: none;
	text-align: center;
	box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
	background-color: #ffffff;
	&:focus {
		box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.6), 0 6px 20px 0 rgba(255, 255, 255, 0.6);
	}
`

//Buttons

export const Button = styled.button`
	border-radius: 20px;
	border: none;
	background-color: #ffffff;
	text-align: center;
	cursor: pointer;
	&:hover {
		box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.6), 0 6px 20px 0 rgba(255, 255, 255, 0.6);
	}
`

export const CurrentLocationButton = styled(Button)`
	padding: 0;
	margin-left: 6px;
	background-color: transparent;
	font-size: 20px;
	color: #ffffff;
	&:hover {
		color: #D03232;
		box-shadow: initial;
	}
`

export const SubmitFormButton = styled(Button)`
	font-size: 16px;
	font-weight: 600;
	padding: 8px 16px;
	color: #4D5D5D;
	margin: 24px auto;
	text-transform: uppercase;
`

export const SaveCityButton = styled(Button)`
	padding: 6px 12px;
	font-size: 16px;
	font-weight: 600;
	color: #4D5D5D;
	&:hover {
		color: #00CC66;
	}
`

export const ThemeChangeButton = styled(Button)`
	border-radius: 50%;
	width: 32px;
	height: 32px;
	transform: translate(0, -5px);
`

export const MyCityButton = styled(Button)`
	background-color: transparent;
	color: #ffffff;
	&:hover {
		text-decoration: underline;
		color: #DDDDDD;
		box-shadow: initial;
	};
	${mq({
	    fontSize: ['16px', '20px']
	})};
`

export const MyCitiesRemoveButton = styled(Button)`
	background-color: transparent;
	color: #D03232;
	padding: 0;
	font-size: 20px;
	margin-left: 8px;
	&:hover {
		color: #A92626;
		box-shadow: initial;
	}
`

export const MyCitiesToggleButton = styled(Button)`
	background-color: transparent;
	color: #ffffff;
	&:hover {
		text-decoration: underline;
		color: #DDDDDD;
		box-shadow: initial;
	};
	${mq({
	    fontSize: ['16px', '22px']
	})};
`

//Wrappers

export const Wrapper = styled.div`
	display: flex;
`

export const SearchMyCitiesWrapper = styled(Wrapper)`
	margin: 36px 0;
	${mq({
	    display: ['flex', 'block'],
	    flexDirection: ['column', 'initial'],
	    marginBottom: ['0px', '36px']
	})};
`

export const SearchWrapper = styled(Wrapper)`
	justify-content: center;
`

export const WeatherInfoWrapper = styled(Wrapper)`
	margin: 0;
	flex-direction: column;
`;

export const WeatherIconWrapper = styled(Wrapper)`
	margin: 32px 0;
	flex-direction: column;
`

export const WeatherTempsWrapper = styled(Wrapper)`
	justify-content: space-evenly;
`

export const SaveCityAndThemeChangeWrapper = styled(Wrapper)`
	padding-bottom: 32px;
	${mq({
	    justifyContent: ['space-around', 'space-evenly']
	})};
`

export const ThemeChangeWrapper = styled(Wrapper)`
	width: 50px;
	border-radius: 10px;
	height: 20px;
`

export const MyCitiesWrapper = styled.ul`
	top: 0;
	right: 0;
	margin: 0;
	padding: 12px 20px;
	list-style: none;
	background-color: rgba(0, 0, 0, 0.3);
	${mq({
	    position: ['initial', 'fixed'],
	    textAlign: ['center', 'right'],
	    backgroundColor: ['transparent', 'rgba(0, 0, 0, 0.3)']
	})};
`

export const MyCitiesLi = styled.li`
	margin-top: 8px;
`

//Text

export const Text = styled.p`
	margin: 0;
`;

export const CityName = styled(Text)`
	margin: 0;
	font-size: 56px;
	font-weight: 700;
`;

export const CurrentDate = styled(Text)`
	font-size: 24px;
	font-weight: 300;
`;

export const PreWeatherInfo = styled(Text)`
	margin: 0;
	font-size: 56px;
	font-weight: 700;
	text-transform: uppercase;
`;

export const WeatherMainTemp = styled(Text)`
	font-size: 84px;
	font-weight: 700;
`;

export const WeatherSky = styled(PreWeatherInfo)`
	font-size: 46px;
	font-style: italic;
	font-weight: 400;
	text-transform: capitalize;
`;

export const WeatherTemps = styled(PreWeatherInfo)`
	font-size: 36px;
	font-weight: 200;
	text-transform: capitalize;
`;

//Keyframes

export const moveButtonRight = keyframes`
	0% {
	  transform: translate(0, -5px);
	}

	100% {
	  transform: translate(65%, -5px);
	}
`

export const moveButtonLeft = keyframes`
	0% {
	  transform: translate(65%, -5px);
	}

	100% {
	  transform: translate(0, -5px);
	}
`