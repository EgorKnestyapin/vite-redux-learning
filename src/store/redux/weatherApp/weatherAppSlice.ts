import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WeatherAppState, WeatherError } from "./types";

const weatherAppInitialState: WeatherAppState = {
  weatherData: undefined,
  weatherDataList: [],
  isLoading: false,
  error: null,
};

export const getWeatherInfo = createAsyncThunk(
  "WEATHER_APP/getWeatherInfo",
  async (city: string) => {
    const APP_ID: string = "339eefdb8be5d321edc00550315211c1";
    console.log(city);
    try {
      console.log("console try");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`
      );
      return await response.json();
    } catch (error: any) {
      console.log(error);
      console.log("console catch");

      return error.message;
    }
  }
);

const weatherAppSlice = createSlice({
  initialState: weatherAppInitialState,
  name: "WEATHER_APP",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherInfo.pending, (state: WeatherAppState) => {
        state.error = null;
        state.weatherData = undefined;
        state.isLoading = true;
      })
      .addCase(
        getWeatherInfo.fulfilled,
        (state: WeatherAppState, action: PayloadAction<any>) => {
          state.isLoading = false;
          const newWeatherData = {
            id: action.payload.id,
            cityName: action.payload.name,
            icon: action.payload.weather[0].icon,
            temp: `${Math.round(action.payload.main.temp - 273.15)}°`,
          };
          state.weatherData = { ...newWeatherData };
          state.weatherDataList = [
            ...state.weatherDataList,
            { ...newWeatherData },
          ];
        }
      )
      .addCase(
        getWeatherInfo.rejected,
        (state: WeatherAppState, action: PayloadAction<any>) => {
          console.log(action);
          state.isLoading = false;
          state.weatherData = undefined;
          state.error = {
            cod: action.payload.cod,
            message: action.payload.message,
          };
        }
      );
  },
});

export const weatherAppActions = weatherAppSlice.actions;

export const weatherAppReducers = weatherAppSlice.reducer;
