"use server"

import { getAllTodos } from "@/lib/todo"
import { Todos } from "./components/Todos";

export default async function Home() {
  const { todos } = await getAllTodos();

  return (
    <main className="min-h-screen bg-primary-background-color">
      <div className="max-w-xs my-0 mx-auto">
        <header>
          <h1 className="font-bold tracking-widest">TODO</h1>
          <img src="" alt="" className="icon" />
        </header>
        <section className="flex flex-col gap-5">
         {todos && <Todos todos={todos}/>}
        </section>
      </div>
    </main>
  )
}
