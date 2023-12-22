import { ChangeEvent, useState } from "react";
import WeatherButton from "../WeatherButton";
import WeatherInput from "../WeatherInput";
import {
  ButtonWrapper,
  ButtonsContainer,
  InputButtonWrapper,
  LoadingComponent,
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
        <ButtonWrapper>
          <WeatherButton
            name="Search"
            onClick={() => {
              if (!city.trim()) {
                alert("Введите название города");
              }
              dispatch(getWeatherInfo(city.trim()));
            }}
          />
        </ButtonWrapper>
      </InputButtonWrapper>
      {isLoading && <LoadingComponent>Loading...</LoadingComponent>}
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
