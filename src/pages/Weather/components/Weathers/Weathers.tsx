import { useDispatch, useSelector } from "react-redux";
import { ButtonContainer, WeathersWrapper } from "./styles";
import { weatherAppSelector } from "store/redux/weatherApp/selectors";
import { WeatherInfoData } from "store/redux/weatherApp/types";
import WeatherInfo from "../WeatherInfo";
import WeatherContainerButton from "../WeatherContainerButton";
import WeatherButton from "../WeatherButton";
import { weatherAppActions } from "store/redux/weatherApp/weatherAppSlice";

function Weathers() {
  const dispatch = useDispatch();
  const { weatherDataList } = useSelector(weatherAppSelector);

  return (
    <WeathersWrapper>
      {weatherDataList.length > 0 && (
        <>
          {weatherDataList.map((weatherInfo: WeatherInfoData) => (
            <WeatherInfo
              key={weatherInfo.id}
              temp={weatherInfo.temp}
              cityName={weatherInfo.cityName}
              icon={weatherInfo.icon}
            >
              <WeatherContainerButton
                name="Delete"
                onClick={() => {
                  dispatch(weatherAppActions.deleteWeatherCard(weatherInfo.id));
                }}
              />
            </WeatherInfo>
          ))}
          <WeatherButton
            name="Delete all cards"
            isWidth100={true}
            onClick={() => {
              dispatch(weatherAppActions.resetWeatherDataListState());
            }}
          />
        </>
      )}
    </WeathersWrapper>
  );
}

export default Weathers;
