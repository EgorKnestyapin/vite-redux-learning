import { useDispatch, useSelector } from "react-redux";
import { todoList } from "store/redux/todoList/selectors";
import { todoListActions } from "store/redux/todoList/todoListSlice";
import { useFormik } from "formik";
import Input from "components/Input";
import {
  TodoListContainer,
  TodoListForm,
  TodoListParagraph,
  TodoListWrapper,
} from "./styles";
import Button from "components/Button";
import { v4 } from "uuid";
import { Task } from "store/redux/todoList/types";

function TodoList() {
  const dispatch = useDispatch();
  const todoListSt = useSelector(todoList).list;
  const formik = useFormik({
    initialValues: {
      taskName: "",
    },
    onSubmit: (values) => {
      if (!formik.values.taskName) {
        alert("Пожалуйста, введите данные");
        return;
      }
      dispatch(todoListActions.addTask(values));
    },
  });

  return (
    <TodoListWrapper>
      <TodoListForm onSubmit={formik.handleSubmit}>
        <Input
          labelName="TODO"
          placeholder="Введите занятие"
          name="taskName"
          value={formik.values.taskName}
          onChange={formik.handleChange}
        />
        <Button type="submit" name="Запланировать событие" />
      </TodoListForm>
      {todoListSt.length > 0 && (
        <TodoListContainer>
          {todoListSt.map((task: Task) => (
            <TodoListParagraph
              key={v4()}
              onClick={() => {
                dispatch(todoListActions.deleteTask(task.id));
              }}
            >
              {task.taskName}
            </TodoListParagraph>
          ))}
          {todoListSt.length > 0 && (
            <Button
              name="Очистить список"
              onClick={() => {
                dispatch(todoListActions.deleteAllTasks());
              }}
            />
          )}
        </TodoListContainer>
      )}
    </TodoListWrapper>
  );
}

export default TodoList;
