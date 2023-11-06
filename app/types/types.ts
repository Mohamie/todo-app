type Todo = {
    id: number;
    title: string;
    isComplete: boolean;
}

type TodoActionType = "ACTIVE" | "COMPLETED" | "ALL" | "UPDATE" | "NEW";


type TodoAction = {
    type: TodoActionType;
    value: Array<Todo>;
    todoToUpdate?: Todo;
}
