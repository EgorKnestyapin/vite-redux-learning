import { createSlice } from "@reduxjs/toolkit";
import { FeedbackInitialState } from "./types";

const initialState: FeedbackInitialState = {
  likesCount: 0,
  dislikesCount: 0,
};

const feedbackSlice = createSlice({
  initialState: initialState,
  name: "Feedback",
  reducers: {
    plusLike: (state: FeedbackInitialState) => {
      state.likesCount += 1;
    },
    plusDislike: (state: FeedbackInitialState) => {
      state.dislikesCount += 1;
    },
    resetResults: () => {
      initialState;
    },
  },
});

export const actions = feedbackSlice.actions;

export default feedbackSlice.reducer;
