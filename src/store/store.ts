import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./redux/counter/counterSlice";
import feedbackReducer from "./redux/feedback/feedbackSlice";
import { userReducers } from "./redux/users/usersSlice";
import { todoListReducers } from "./redux/todoList/todoListSlice";
import { jokeGeneratorReducers } from "./redux/jokeGenerator/jokeGeneratorSlice";
import { catFactsReducers } from "./redux/catFacts/catFactsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feedback: feedbackReducer,
    users: userReducers,
    todoList: todoListReducers,
    jokeGenerator: jokeGeneratorReducers,
    catFacts: catFactsReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
