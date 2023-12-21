export interface WeatherAppState {
  weatherData: WeatherInfoData | undefined;
  weatherDataList: WeatherInfoData[];
  isLoading: boolean;
  error: WeatherError | null;
}

export interface WeatherInfoData {
  id: number;
  temp: string;
  icon: string;
  cityName: string;
}

export interface WeatherError {
  cod: number;
  message: string;
}
