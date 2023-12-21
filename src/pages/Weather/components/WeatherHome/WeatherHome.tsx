import { ChangeEvent, useState } from "react";
import WeatherButton from "../WeatherButton";
import WeatherInput from "../WeatherInput";
import { InputButtonWrapper, WeatherHomeWrapper } from "./styles";
import { useDispatch } from "react-redux";
import { getWeatherInfo } from "store/redux/weatherApp/weatherAppSlice";
import { AppDispatch } from "store/store";

function WeatherHome() {
  const [city, setCity] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  // const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
  //   setCity(event.target.value);
  // };

  // const getWeatherInfo = async () => {
  //   if (city.length === 0) {
  //     alert("Enter city name");
  //     return;
  //   }
  //   setWeatherError("");
  //   setWeatherInfo(undefined);
  //   setLoading(true);
  //   const response = await fetch(URL_WEATHER);
  //   const data = await response.json();
  //   setLoading(false);
  //   if (response.ok) {
  //     const tempFromData = data.main.temp;
  //     const feelsLikeTempFromData = data.main.feels_like;
  //     setWeatherInfo({
  //       temp: `${Math.round(tempFromData - 273.15)}°`,
  //       icon: `${data.weather[0].icon}`,
  //       cityName: `${data.name}`,
  //       feelsLike: `${Math.round(feelsLikeTempFromData - 273.15)}°`,
  //     });
  //   } else {
  //     setWeatherError(data.message);
  //   }
  // };
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
    </WeatherHomeWrapper>
  );
}

export default WeatherHome;
