import React, { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";

import './App.css';

const defaultTodos = [
 {id: 1, text: 'hola shshsja jaskahsib b  ashoas shxsc hxshxbdsc csicnsc ocjs', completed: false},
 {id: 2, text: 'adios', completed: true},
 {id: 3, text: 'hola', completed: false},
 {id: 4, text: 'pepe', completed: true}
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  return (
    <div className="app">
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}>
      </TodoCounter>
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text}
            completed={todo.completed}
            />
        ))}
      </TodoList>

      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}>
      </TodoSearch>

      <CreateTodoButton></CreateTodoButton>
    </div>
  );
}

export default App;
