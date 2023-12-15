import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";

// Забираем все, что лежит у нас в глобальном стейте
const globalState = (state: RootState) => state;

// Забрать только то, что нам нужно, а именно состояние counter
// 1 аргумент createSelector - функция коллбэк, которая возвращает глобальный стейт
// 2 аргумент - функция коллбэк, которая возвращает нужную нам часть из глобального стейта
export const counterState = createSelector(
  globalState,
  (state) => state.counter
);
