"use client"

import { deleteTodoAction, updateTodoAction } from "@/actions/todoActions"
import { useState, useTransition } from "react"
import { Draggable } from 'react-beautiful-dnd';


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

export default function TodoItem(props: { todo: Todo, index: number, updatedTodo: (todo: Todo) => void }) {
    const { id, title, isComplete } = props.todo;
    const [isPending, setTransition] = useTransition();
    const [completed, setCompleted] = useState(isComplete);

    const onTodoComplete = () => {
        setTransition(() => updateTodoAction({...props.todo, isComplete: !isComplete}));
        props.updatedTodo({ ...props.todo, isComplete: !isComplete })
        setCompleted(isComplete => !isComplete);
    }

    const onTodoDelete = () => {
        setTransition(() => deleteTodoAction(id));
    }

    return<>
        <Draggable key={id} draggableId={id.toString()} index={props.index}>
            {(provided) => (
                <li key={id} className={itemStyles} 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                >
                    <span className={`${checkboxStyles}`}></span>
                    <span className={`cursor-pointer ${completed ? 'line-through' : ''}`}
                        onClick={onTodoComplete}>
                        {title}
                    </span>
                    <span className="ml-auto cursor-pointer" onClick={onTodoDelete}>❌</span>
                </li>
            )}
        </Draggable>
    </>
}