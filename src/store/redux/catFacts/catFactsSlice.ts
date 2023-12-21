import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CatFactsPayload, CatFactsState } from "./types";
import { v4 } from "uuid";

const catFactsInitialState: CatFactsState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getCatFacts = createAsyncThunk(
  "CAT_FACTS/getCatFacts",
  async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const res = await response.json();
    return res;
  }
);

const catFactsSlice = createSlice({
  initialState: catFactsInitialState,
  name: "CAT_FACTS",
  reducers: {
    resetCatFactsState: () => catFactsInitialState,
    deleteFact: (state: CatFactsState, action: PayloadAction<string>) => {
      state.data = [...state.data].filter(
        (catFact) => catFact.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatFacts.pending, (state: CatFactsState) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(
        getCatFacts.fulfilled,
        (state: CatFactsState, action: PayloadAction<CatFactsPayload>) => {
          state.isLoading = false;
          state.data = [...state.data, { ...action.payload, id: v4() }];
        }
      )
      .addCase(
        getCatFacts.rejected,
        (state: CatFactsState, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const catFactsActions = catFactsSlice.actions;

export const catFactsReducers = catFactsSlice.reducer;
