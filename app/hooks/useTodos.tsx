import { useReducer } from "react";

export function useTodos(initialState: Todo[]){

    const [todos, setTodos] = useReducer(todoReducer, initialState);
    
    const setFilter = (type: TodoActionType) => setTodos({type, value: initialState});

    const updateTodo = (todoToUpdate: Todo) => setTodos({type: "UPDATE", todoToUpdate, value: initialState});
    
    return {todos, setTodos, setFilter, updateTodo}
}

function todoReducer(state: Todo[], action: TodoAction){ 
    switch(action.type){
        case "NEW":
        case "ALL": 
            return [...action.value]

        case "ACTIVE":
            return [...action.value.filter(todo => !todo.isComplete)]
            
        case "COMPLETED":
            return [...action.value.filter(todo => todo.isComplete)]
        
        case "UPDATE": 
            const indexOfTodo = action.value.findIndex(todo => todo.id === action.todoToUpdate?.id)
            action.value[indexOfTodo].isComplete = action.todoToUpdate!.isComplete;

            return [...action.value]
             
    }
}