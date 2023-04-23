import React from 'react'
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";

export function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return(
        <>
        <div className="app">
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}>
      </TodoCounter>
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}>
      </TodoSearch>

      <CreateTodoButton></CreateTodoButton>
    </div>
        </>
    );
}