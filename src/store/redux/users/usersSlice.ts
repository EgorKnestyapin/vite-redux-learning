import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UsersState } from "./types";

const usersInitialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "USERS",
  initialState: usersInitialState,
  reducers: {
    addUser: (state: UsersState, action: PayloadAction<User>) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const userActions = usersSlice.actions;
export const userReducers = usersSlice.reducer;
