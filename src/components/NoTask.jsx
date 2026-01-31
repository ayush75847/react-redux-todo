import { useSelector } from "react-redux";

export default function NoTask() {
    const todos = useSelector((state) => state.todos);
    
    return (
        <>
            {todos.length ===0 && <h2>No Task Added!</h2>}
        </>
    );
};