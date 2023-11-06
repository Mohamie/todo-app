"use client"

import { useEffect } from "react";
import { useTodos } from "../hooks/useTodos";
import { TodoFilters } from "./TodoFilters";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export function Todos(props: {todos: Todo[]}){
    const {todos, setTodos, setFilter, updateTodo} = useTodos(props.todos)
    
    useEffect(() => {
        setTodos({type: "NEW", value: props.todos})
    }, [props.todos])

    return <>
        <TodoInput/>
        {props.todos && <TodoList todos={todos} updatedTodo={updateTodo}/>} 
        <TodoFilters 
            setFilter={setFilter}
        /> 
    </>
}