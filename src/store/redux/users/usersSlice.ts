import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddUserPayload, User, UsersState } from "./types";
import { v4 } from "uuid";

const usersInitialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "USERS",
  initialState: usersInitialState,
  reducers: {
    addUser: (state: UsersState, action: PayloadAction<AddUserPayload>) => {
      state.users = [...state.users, { ...action.payload, id: v4() }];
    },
    deleteUser: (state: UsersState, action: PayloadAction<string>) => {
      state.users = [...state.users].filter(
        (user: User) => user.id !== action.payload
      );
    },
    deleteAllUsers: () => usersInitialState,
  },
});

export const userActions = usersSlice.actions;
export const userReducers = usersSlice.reducer;
