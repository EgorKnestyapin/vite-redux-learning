import {
  ApiError,
  ErrorMessage,
  WeatherErrorContainer,
  WeatherErrorWrapper,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { weatherAppSelector } from "store/redux/weatherApp/selectors";
import WeatherContainerButton from "../WeatherContainerButton";
import { weatherAppActions } from "store/redux/weatherApp/weatherAppSlice";

function WeatherError() {
  const { error } = useSelector(weatherAppSelector);
  const dispatch = useDispatch();

  return (
    <WeatherErrorWrapper>
      <WeatherErrorContainer>
        <ApiError>{`API Error ${error?.cod}`}</ApiError>
        <ErrorMessage>{error?.message}</ErrorMessage>
      </WeatherErrorContainer>
      <WeatherContainerButton
        name="Delete"
        onClick={() => {
          dispatch(weatherAppActions.deleteWeatherErrorCard());
        }}
      />
    </WeatherErrorWrapper>
  );
}

export default WeatherError;
