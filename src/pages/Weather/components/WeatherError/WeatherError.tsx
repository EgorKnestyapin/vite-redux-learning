import { ApiError, ErrorMessage, WeatherErrorWrapper } from "./styles";
import { useSelector } from "react-redux";
import { weatherAppSelector } from "store/redux/weatherApp/selectors";

function WeatherError() {
  const { error } = useSelector(weatherAppSelector);

  return (
    <WeatherErrorWrapper>
      <ApiError>{`API Error ${error?.cod}`}</ApiError>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </WeatherErrorWrapper>
  );
}

export default WeatherError;
