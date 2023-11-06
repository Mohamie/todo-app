"use client"

import { useTransition } from "react";
import TodoItem from "./TodoItem";
import { deleteCompletedTodosAction } from "@/actions/todoActions";

const itemStyles = `
    relative
    flex
    justify-between
    p-3
    cursor-pointer 
`

export default function TodoList(props: { todos: Array<Todo>, updatedTodo: (todo: Todo) => void }) {
    const { todos, updatedTodo } = props;
    const [isPending, setTransition] = useTransition();

    const activeTodosCount = todos?.filter(todo => !todo.isComplete).length;

    return <>
        <ul className="bg-secondary-text-color rounded shadow-md">
            {todos?.map((todo) => <TodoItem key={todo.id} todo={todo} updatedTodo={updatedTodo}/>)}
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
    </>
} 