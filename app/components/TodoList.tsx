import TodoItem from "./TodoItem";

const itemStyles = `
    relative
    flex
    justify-between
    p-3
    cursor-pointer 
`

export default function TodoList(props: { todos: Array<Todo> }) {
    const { todos } = props;
    const activeTodosCount = todos?.filter(todo => !todo.isComplete).length;

    return <>
        <ul className="bg-secondary-text-color rounded shadow-md">
            {todos?.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
            {
                activeTodosCount ?
                    <li className={itemStyles}>
                        <span>{activeTodosCount} items left</span>
                        <span>Clear Completed</span>
                    </li> :
                    <></>
            }

        </ul>
    </>
} 