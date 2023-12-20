import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JokeData, JokeGeneratorState } from "./types";

const jokeGeneratorInitialState: JokeGeneratorState = {
  data: null,
  error: null,
  isLoading: false,
};

// Создаем асинхронный middleware функцию Thunk через createAsyncThunk
export const getJoke = createAsyncThunk("JOKE_GENERATOR/getJoke", async () => {
  // Делаем get запрос на сервер
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  // В result у нас будет лежать либо успешно пришедшие данные, либо ошибка
  const result = await response.json();
  return result;
});

const jokeGeneratorSlice = createSlice({
  name: "JOKE_GENERATOR",
  initialState: jokeGeneratorInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Первым запускается pending
      .addCase(getJoke.pending, (state: JokeGeneratorState) => {
        state.data = null;
        state.error = null;
        state.isLoading = true;
      })
      // Когда данные приходят, у нас вызывается либо fulfilled, либо rejected case
      .addCase(
        getJoke.fulfilled,
        (state: JokeGeneratorState, action: PayloadAction<JokeData>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        getJoke.rejected,
        (state: JokeGeneratorState, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const jokeGeneratorActions = jokeGeneratorSlice.actions;

export const jokeGeneratorReducers = jokeGeneratorSlice.reducer;
