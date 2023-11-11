"use client"

import { useState, useTransition } from "react";
import TodoItem from "./TodoItem";
import { deleteCompletedTodosAction, updateTodoAction } from "@/actions/todoActions";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';


const itemStyles = `
    relative
    flex
    justify-between
    p-3
    cursor-pointer 
`

export default function TodoList(props: { todos: Array<Todo>, updatedTodo: (todo: Todo) => void }) {
    const { updatedTodo } = props;
    const [todos, setTodos] = useState(props.todos)
    const [isPending, setTransition] = useTransition();

    const activeTodosCount = todos?.filter(todo => !todo.isComplete).length;

    function handleOnDragEnd(result: DropResult){
        if(!result.destination) return;

        console.log(result)

        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTodos(items)
        
        setTransition(() => updateTodoAction({...reorderedItem, position: result.destination!.index}))
    }

    return <>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todoList">
                {(provided) => (
                    <ul className="bg-secondary-text-color rounded shadow-md" {...provided.droppableProps} ref={provided.innerRef}>
                        {todos?.map((todo, index) => <TodoItem key={todo.id} index={index} todo={todo} updatedTodo={updatedTodo}/>)}
                        {provided.placeholder}
                        {
                            activeTodosCount ?
                                <li className={itemStyles}>
                                    <span>{activeTodosCount} items left</span>
                                    <span onClick={() => setTransition(deleteCompletedTodosAction)}>
                                        Clear Completed
                                    </span>
                                </li> :
                                <></>
                        }
                        
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    </>
} 