import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddTaskPayload, TodoListState } from "./types";
import { v4 } from "uuid";

const todoListInitialState: TodoListState = {
  list: [],
};

const todoListSlice = createSlice({
  initialState: todoListInitialState,
  name: "TODOLIST",
  reducers: {
    addTask: (state: TodoListState, action: PayloadAction<AddTaskPayload>) => {
      state.list = [...state.list, { ...action.payload, id: v4() }];
    },
    deleteTask: (state: TodoListState, action: PayloadAction<string>) => {
      state.list = [...state.list].filter((task) => task.id !== action.payload);
    },
    deleteAllTasks: () => todoListInitialState,
  },
});

export const todoListActions = todoListSlice.actions;

export const todoListReducers = todoListSlice.reducer;
