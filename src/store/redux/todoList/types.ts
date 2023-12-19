export interface TodoListState {
  list: Task[];
}

export interface Task {
  id: string;
  taskName: string;
}

export interface AddTaskPayload {
  taskName: string;
}
