import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./AddTodo";
import { deleteTask, markAsDone } from "../features/todo/todoSlice";
import AllDone from "./AllDone";
import NoTask from "./NoTask";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const pending = todos.filter((t) => !t.isDone).length;
    const completed = todos.length - pending;

    return (
        <div className="min-h-screen relative flex items-start justify-center px-4 py-20"
            style={{ background: "linear-gradient(145deg, var(--clr-bg-start), var(--clr-bg-end))" }}>

            {/* Background blobs */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>

            {/* Main glass card */}
            <div className="glass-card relative z-10 w-full max-w-md rounded-2xl p-7">

                {/* Header */}
                <div className="mb-7">
                    <h1 className="text-3xl font-700 tracking-tight mb-4 text-center" style={{ color: "var(--clr-text)" }}>
                        My Tasks
                    </h1>
                    <div className="flex items-center justify-center gap-3">
                        <p className="text-xs font-medium p-4 rounded-lg"
                            style={{ background: "var(--clr-accent-light)", color: "var(--clr-accent)" }}>
                            {pending} pending
                        </p>
                        <p className="text-xs font-medium p-4 rounded-lg"
                            style={{ background: "var(--clr-success-light)", color: "var(--clr-success)" }}>
                            {completed} done
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="mb-5" style={{ height: "4px", background: "linear-gradient(90deg, transparent, rgba(180,140,100,0.25), transparent)" }}></div>

                {/* Input */}
                <AddTodo />

                {/* Messages */}
                <div className="mt-4">
                    <AllDone />
                    <NoTask />
                </div>

                {/* Todo list */}
                {todos.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2">
                        {todos.map((todo, index) => (
                            <li
                                key={todo.id}
                                className={`todo-item ${todo.isDone ? "done" : ""} flex items-center justify-between px-3.5 py-3 rounded-xl`}
                                style={{ animationDelay: `${index * 0.07}s` }}
                            >
                                {/* Left: checkbox + task */}
                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                    <div
                                        className={`custom-check ${todo.isDone ? "checked" : ""}`}
                                        onClick={() => dispatch(markAsDone(todo.id))}
                                    >
                                        {todo.isDone && (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </div>

                                    <span className={`text-sm truncate ${todo.isDone ? "task-done" : ""}`}
                                        style={{ color: todo.isDone ? "var(--clr-text-dim)" : "var(--clr-text)" }}>
                                        {todo.task}
                                    </span>
                                </div>

                                {/* Right: delete */}
                                <button
                                    className="btn-delete"
                                    onClick={() => dispatch(deleteTask(todo.id))}
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Footer hint */}
                {todos.length > 0 && (
                    <p className="text-center text-xs mt-5" style={{ color: "var(--clr-text-dim)" }}>
                        Click the checkbox to complete · Hover to delete
                    </p>
                )}
            </div>
        </div>
    );
}
