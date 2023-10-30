import { createTodo, deleteTodo, updateTodo } from "@/lib/todo";
import { revalidatePath } from "next/cache";

export async function createTodoAction(title: string){
    
    if(!title) return;

    await createTodo(title);
    revalidatePath("/")
}

export async function updateTodoAction(id: number, isComplete: boolean){
    await updateTodo(id, isComplete);
    revalidatePath("/")
}

export async function deleteTodoAction(id: number){
    await deleteTodo(id);
    revalidatePath("/")
}