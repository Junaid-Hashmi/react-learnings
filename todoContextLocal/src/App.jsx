import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodoList((prev) =>
      prev.map((prevTodo) => {
        prevTodo.id === id ? todo : prevTodo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((prevTodo) => {
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo;
      })
    );
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));

    if (todoList && todoList.length > 0) setTodoList(todoList);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoProvider
      value={{ todoList, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todoList.map((todo) => {
              return (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
