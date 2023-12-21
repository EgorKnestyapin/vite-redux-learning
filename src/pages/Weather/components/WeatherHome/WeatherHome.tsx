import { ChangeEvent, useState } from "react";
import WeatherButton from "../WeatherButton";
import WeatherInput from "../WeatherInput";
import {
  ButtonsContainer,
  InputButtonWrapper,
  WeatherHomeWrapper,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getWeatherInfo,
  weatherAppActions,
} from "store/redux/weatherApp/weatherAppSlice";
import { AppDispatch } from "store/store";
import { weatherAppSelector } from "store/redux/weatherApp/selectors";
import WeatherInfo from "../WeatherInfo";
import WeatherContainerButton from "../WeatherContainerButton";
import WeatherError from "../WeatherError";

function WeatherHome() {
  const [city, setCity] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const { weatherData, isLoading, error } = useSelector(weatherAppSelector);

  return (
    <WeatherHomeWrapper>
      <InputButtonWrapper>
        <WeatherInput
          placeholder="Enter city name"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setCity(event.target.value);
          }}
        />
        <WeatherButton
          name="Search"
          onClick={() => {
            dispatch(getWeatherInfo(city));
          }}
        />
      </InputButtonWrapper>
      {isLoading && <h1 style={{ color: "white" }}>Loading...</h1>}
      {weatherData && (
        <WeatherInfo
          temp={weatherData.temp}
          icon={weatherData.icon}
          cityName={weatherData.cityName}
        >
          <ButtonsContainer>
            <WeatherContainerButton
              onClick={() => {
                dispatch(weatherAppActions.saveWeatherData(weatherData));
              }}
              name="Save"
            />
            <WeatherContainerButton
              onClick={() => {
                dispatch(weatherAppActions.deleteWeatherDataHomePage());
              }}
              name="Delete"
            />
          </ButtonsContainer>
        </WeatherInfo>
      )}
      {error && <WeatherError />}
    </WeatherHomeWrapper>
  );
}

export default WeatherHome;
