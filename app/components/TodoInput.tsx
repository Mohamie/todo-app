"use client"
import { createTodoAction } from "@/actions/todoActions";
import { useRef } from "react";

export default function TodoInput(){
    const formRef = useRef<HTMLFormElement>(null);
    
    const formAction = (data: FormData) => {
        const title = data.get("title");

        if(!title || typeof title !== "string") return;

        createTodoAction(title.toString());
        formRef.current?.reset();
    }

    return <>
        <form ref={formRef} action={formAction}>
            <input type="text" name="title" placeholder="Create a new todo..." className="text-black text-dark 
            border border-light-grayish-blue rounded
            p-2 pl-10
            w-full
            "/>
        </form>
    </>
}