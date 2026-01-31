import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todo/todoSlice";

export default function AddTodo() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        if (!task.trim()) return;
        dispatch(addTask(task.trim()));
        setTask("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2.5">
            <input
                type="text"
                value={task}
                placeholder="What needs to be done?"
                onChange={(e) => setTask(e.target.value)}
                className="luxury-input flex-1 px-4 py-3 rounded-xl text-sm"
                style={{ color: "var(--clr-text)" }}
            />
            <button
                type="submit"
                className="btn-accent px-5 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 whitespace-nowrap"
            >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                </svg>
                Add
            </button>
        </form>
    );
}
