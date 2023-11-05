"use client"

import { useTodos } from "../hooks/useTodos";
import { TodoFilters } from "./TodoFilters";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export function Todos(props: {todos: Todo[]}){
    const {todos, setAll, setActive, setCompleted} = useTodos(props.todos)    

    return <>
        <TodoInput/>
        {props.todos && <TodoList todos={todos}/>} 
        <TodoFilters 
            setAll={setAll}
            setActive={setActive}
            setComplete={setCompleted}
        /> 
    </>
}