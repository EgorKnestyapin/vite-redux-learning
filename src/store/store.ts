import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./redux/counter/counterSlice";
import feedbackReducer from "./redux/feedback/feedbackSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feedback: feedbackReducer,
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
