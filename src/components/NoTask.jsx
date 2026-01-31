import { useSelector } from "react-redux";

export default function NoTask() {
    const todos = useSelector((state) => state.todos);

    if (todos.length !== 0) return null;

    return (
        <div className="banner banner-empty">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "rgba(212, 115, 74, 0.08)", border: "1.5px dashed rgba(212, 115, 74, 0.3)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
            </div>
            <p className="text-sm font-medium" style={{ color: "var(--clr-text)" }}>Your task list is empty</p>
            <p className="text-xs" style={{ color: "var(--clr-text-dim)" }}>Add a task above to get started</p>
        </div>
    );
}
