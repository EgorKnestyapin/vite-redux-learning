import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CounterInitialState } from "./types";

// Это дефолтовое состояние для counter state
const initialState: CounterInitialState = {
  count: 0,
};
// Создаем slice - это функция, которая передает данные в глобальный стор,
// создает reducers и actions

const counterSlice = createSlice({
  // Имя, по которому мы следим за состоянием
  // когда будет вызываться reducer, мы будем по этому имени следить
  // за изменением в стейте в Redux Devtools
  name: "COUNTER",
  // Создаем стейт для стора, передав ему initialValue
  initialState: initialState,
  reducers: {
    // функция recucer - ф-я, которая меняет стейт и принимает в себя 2 аргумента
    // 1 аргумент - это текущее состояние в стейте
    add: (state: CounterInitialState) => {
      state.count += 1;
    },
    minus: (state: CounterInitialState) => {
      state.count -= 1;
    },
    multiply: (
      state: CounterInitialState,
      { payload = 2 }: PayloadAction<number | undefined>
    ) => {
      state.count *= payload;
    },
    divide: (state: CounterInitialState) => {
      state.count /= 2;
    },
  },
});

// actions - это наши экшены, которые мы будет диспатчить, т.е. говорить store
// какой reducer вызвать. Мы должны передавать actions в компонент, в который мы планируем "диспатчить экш"
export const actions = counterSlice.actions;

// передаем в store, чтобы положить туда reducer
export default counterSlice.reducer;
