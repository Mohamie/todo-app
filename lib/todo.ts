import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllTodos(){
    try {
       const todos = await prisma.todo.findMany();
       
       return todos;
    } catch (error) {
        return { error }
    }
}

export async function createTodo(title: string){
    try {
       await prisma.todo.create({data: {title}});
    } catch (error) {
        return { error }
    }
}

export async function updateTodo(id: number, isComplete: boolean){
    try {
       await prisma.todo.update({where: {id}, data: {isComplete}});
    } catch (error) {
        return { error }
    }
}

export async function deleteTodo(id: number){
    try {
       await prisma.todo.delete({where: {id}});
    } catch (error) {
        return { error }
    }
}

