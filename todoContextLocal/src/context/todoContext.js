import { createContext, useContext } from "react";

export const todoContext = createContext({
  todoList: [
    {
      id: 1,
      todo: " task 1",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = todoContext.Provider;

export const useTodo = () => {
  return useContext(todoContext);
};
