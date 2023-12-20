import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CatFact, CatFactsPayload, CatFactsState } from "./types";

const catFactsInitialState: CatFactsState = {
  data: [],
  isLoading: false,
};

export const getCatFacts = createAsyncThunk(
  "CATFACTS/getCatFacts",
  async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const res = await response.json();
    return res;
  }
);

const catFactsSlice = createSlice({
  initialState: catFactsInitialState,
  name: "CATFACTS",
  reducers: {
    resetCatFactsState: () => catFactsInitialState,
    deleteFact: (state: CatFactsState, action: PayloadAction<string>) => {
      state.data = [...state.data].filter(
        (catFact) => catFact.fact !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatFacts.pending, (state: CatFactsState) => {
        state.isLoading = true;
      })
      .addCase(
        getCatFacts.fulfilled,
        (state: CatFactsState, action: PayloadAction<CatFactsPayload>) => {
          state.isLoading = false;
          state.data = [...state.data, { ...action.payload }];
        }
      )
      .addCase(getCatFacts.rejected, () => {
        alert("Ошибка сети");
      });
  },
});

export const catFactsActions = catFactsSlice.actions;

export const catFactsReducers = catFactsSlice.reducer;
