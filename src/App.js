import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";

import './App.css';

const todos = [
 {id: 1, text: 'hola shshsja jaskahsib b  ashoas shxsc hxshxbdsc csicnsc ocjs', completed: false},
 {id: 2, text: 'adios', completed: true}
]

function App() {
  return (
    <div className="app">
      <TodoCounter></TodoCounter>
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text}
            completed={todo.completed}
            />
        ))}
      </TodoList>

      <TodoSearch></TodoSearch>
      <CreateTodoButton></CreateTodoButton>
    </div>
  );
}

export default App;
