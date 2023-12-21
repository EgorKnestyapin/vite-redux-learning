import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";

const globalState = (state: RootState) => state;

export const weatherAppSelector = createSelector(
  globalState,
  (state: RootState) => state.weatherApp
);
