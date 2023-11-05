import { useReducer } from "react";

export function useTodos(initialState: Todo[]){

    const [todos, setTodos] = useReducer(todoReducer, initialState);
    
    const setActive = () => setTodos({type: "ACTIVE", value: initialState});

    const setCompleted = () => setTodos({type: "COMPLETED", value: initialState});

    const setAll = () => setTodos({type: "ALL", value: initialState});
    
    return {todos, setAll, setActive, setCompleted}
}

function todoReducer(state: Todo[], action: TodoAction){  
    switch(action.type){
        case "ACTIVE":
            return [...action.value.filter(todo => !todo.isComplete)]
            
        case "COMPLETED":
            return [...action.value.filter(todo => todo.isComplete)]

        case "ALL": 
            return [...action.value]
             
    }
}