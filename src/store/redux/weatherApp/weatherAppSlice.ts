import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WeatherAppState, WeatherError, WeatherInfoData } from "./types";
import { v4 } from "uuid";

const weatherAppInitialState: WeatherAppState = {
  weatherData: undefined,
  weatherDataList: [],
  isLoading: false,
  error: null,
};

export const getWeatherInfo = createAsyncThunk(
  "WEATHER_APP/getWeatherInfo",
  async (city: string, { rejectWithValue }) => {
    const APP_ID: string = "339eefdb8be5d321edc00550315211c1";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`
    );
    const result = await response.json();
    if (!response.ok) {
      return rejectWithValue(result);
    }

    return result;
  }
);

const weatherAppSlice = createSlice({
  initialState: weatherAppInitialState,
  name: "WEATHER_APP",
  reducers: {
    saveWeatherData: (
      state: WeatherAppState,
      action: PayloadAction<WeatherInfoData>
    ) => {
      state.weatherDataList = [...state.weatherDataList, action.payload];
      state.weatherData = undefined;
    },
    deleteWeatherDataHomePage: (state: WeatherAppState) => {
      state.weatherData = undefined;
    },
    resetWeatherDataListState: (state: WeatherAppState) => {
      state.weatherDataList = [];
    },
    deleteWeatherCard: (
      state: WeatherAppState,
      action: PayloadAction<string>
    ) => {
      state.weatherDataList = [...state.weatherDataList].filter(
        (weatherInfo: WeatherInfoData) => weatherInfo.id !== action.payload
      );
    },
    deleteWeatherErrorCard: (state: WeatherAppState) => {
      state.error = null;
    },
  },
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
          console.log(action.payload);

          state.weatherData = {
            id: v4(),
            cityName: action.payload.name,
            icon: action.payload.weather[0].icon,
            temp: `${Math.round(action.payload.main.temp - 273.15)}°`,
          };
        }
      )
      .addCase(
        getWeatherInfo.rejected,
        (state: WeatherAppState, action: PayloadAction<any>) => {
          state.isLoading = false;
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
