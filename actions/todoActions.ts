"use server"

import { createTodo, deleteCompletedTodos, deleteTodo, updateTodo } from "@/lib/todo";
import { revalidatePath } from "next/cache";


export async function createTodoAction(title: string){
    if(!title) return;

    await createTodo(title);
    revalidatePath("/")
}

export async function updateTodoAction(todo: Todo){
    await updateTodo(todo);
}

export async function deleteTodoAction(id: number){
    await deleteTodo(id);
    revalidatePath("/")
}

export async function deleteCompletedTodosAction(){
    await deleteCompletedTodos();
    revalidatePath("/")
}