import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todo/todoSlice";

export default function AddTodo(){
    const[task, setTask]= useState("");
    const dispatch= useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        console.log(task);
        dispatch(addTask(task));
        setTask("");
    }
    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"
            value={task}
            placeholder="Write your Task"
            onChange={(e)=> setTask(e.target.value)} />
            <button>Add Task</button>
        </form>
        </>
    )
}