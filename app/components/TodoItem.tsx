"use client"

import { deleteTodoAction, updateTodoAction } from "@/actions/todoActions"
import { useState, useTransition } from "react"

type Todo = {
    id: number,
    title: string,
    isComplete: boolean
}

const itemStyles = `
    relative
    flex
    p-3 pl-10 
    border-b border-l-secondary-disabled-text-color 
`

const checkboxStyles = `
    absolute 
    left-2
    w-5 h-5 
    border rounded-full 
    hover:cursor-pointer
    bg-teal-300
`
const checkboxChecked = `
`

export default function TodoItem(props: {todo: Todo, updatedTodo: (todo: Todo) => void}){
    const {id, title, isComplete} = props.todo;
    const [isPending, setTransition] = useTransition();
    const [completed, setCompleted] = useState(isComplete);

    const onTodoComplete = () => {
        setTransition(() => updateTodoAction(id, !isComplete));
        props.updatedTodo({id, title, isComplete: !isComplete})
        setCompleted(isComplete => !isComplete);
    }
    
    const onTodoDelete = () => {
        setTransition(() => deleteTodoAction(id));
    }

    return <li key={id} className={itemStyles}>
        <span className={`${checkboxStyles}`}></span>
        <span className={`cursor-pointer ${completed ? 'line-through' : ''}`} 
            onClick={onTodoComplete}>
            {title}
        </span>
        <span className="ml-auto cursor-pointer" onClick={onTodoDelete}>❌</span>
    </li>
}