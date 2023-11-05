type Todo = {
    id: number;
    title: string;
    isComplete: boolean;
}

type TodoAction = {
    type: "ACTIVE" | "COMPLETED" | "ALL";
    value: Array<Todo>
}
