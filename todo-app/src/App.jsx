import { useReducer, useEffect, useRef, useMemo } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

import React from 'react';




function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: uuidv4(), text: action.payload, completed: false },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch({ type: "ADD", payload: text });
      inputRef.current.value = "";
    }
  };

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos]
  );
  const pendingTodos = useMemo(
    () => todos.filter((todo) => !todo.completed),
    [todos]
  );

  return (
    <div className="container">
      <h1>📌 To-Do List</h1>
      <div className="input-container">
        <input ref={inputRef} type="text" placeholder="Thêm công việc..." />
        <button onClick={handleAddTodo}>Thêm</button>
      </div>
      <TodoList
        todos={pendingTodos}
        dispatch={dispatch}
        title="🔹 Công việc cần làm"
      />
      <TodoList
        todos={completedTodos}
        dispatch={dispatch}
        title="✅ Hoàn thành"
      />
    </div>
  );
}

export default App;
