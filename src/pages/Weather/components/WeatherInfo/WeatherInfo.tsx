import {
  CityName,
  IconWrapper,
  Temp,
  TempWrapper,
  WeatherInfoContainer,
  WeatherInfoWrapper,
} from "./styles";
import { WeatherInfoProps } from "./types";

function WeatherInfo({
  temp,
  icon,
  cityName,
  children,
}: WeatherInfoProps) {
  /* <WeatherInfo 
temp={weatherData.temp}
 city=(weatherData.city)
 isShowOnlyDeleteButton={true}
onDelete={() => {
dispatch(weatherActions.deleteCard(weatherData.id))
}}
  и т.д />
  */
  return (
    <WeatherInfoWrapper>
      <WeatherInfoContainer>
        <TempWrapper>
          <Temp>{temp}</Temp>
          <CityName>{cityName}</CityName>
        </TempWrapper>
        <IconWrapper>
          <img
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="weatherIcon"
          />
        </IconWrapper>
      </WeatherInfoContainer>
      {children}
    </WeatherInfoWrapper>
  );
}

export default WeatherInfo;
