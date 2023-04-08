import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";

import './App.css';

const todos = [
 {id: 1, text: 'hola', completed: false},
 {id: 2, text: 'adios', completed: false}
]

function App() {
  return (
    <>
      <TodoCounter></TodoCounter>
      
      <TodoSearch></TodoSearch>

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text}></TodoItem>
        ))}
      </TodoList>

      <CreateTodoButton></CreateTodoButton>
    </>
  );
}

export default App;
