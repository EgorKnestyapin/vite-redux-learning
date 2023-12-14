import { createSlice } from "@reduxjs/toolkit"

// Это наше дефолтовое состояние при инициализации приложения
const initialState = {
  count: 0,
}
// Создаем slice - это функция, которая передает данные в глобальный стор,
// создает reducers и actions

const counterSlice = createSlice({
  // Имя, по которому мы следим за состоянием
  name: "COUNTER",
  // Создаем стейт для стора, передав ему initialValue
  initialState: initialState,
  reducers: {
    add: (state) => {
      state.count += 1
    },
  },
})

export const actions = counterSlice.actions

export default counterSlice.reducer
