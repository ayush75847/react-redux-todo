import { useSelector } from "react-redux";

export default function AllDone() {
    const todos = useSelector((state) => state.todos);
    const allDone = todos.every((todo) => todo.isDone === true);

    if (!(allDone && todos.length > 0)) return null;

    return (
        <div className="banner banner-success">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>All tasks completed! 🎉</span>
        </div>
    );
}
