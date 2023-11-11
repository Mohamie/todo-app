import prisma from "./prisma";

export async function getAllTodos(){
    try {
       const todos = await prisma.todo.findMany({orderBy: {
        id: "asc"
       }});
       
       return { todos };
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

export async function updateTodo(todo: Todo){
    try {
       await prisma.todo.update({where: {id: todo.id}, data: {...todo}});
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

export async function deleteCompletedTodos(){
    try {
       await prisma.todo.deleteMany({where: {isComplete: true}})
    } catch (error) {
        return { error }
    }
}

