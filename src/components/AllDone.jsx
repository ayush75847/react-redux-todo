import { useSelector } from "react-redux";

export default function AllDone() {
    const todos = useSelector((state) => state.todos);
    const allDone = todos.every((todo) => todo.isDone === true);

    return (
        <>
            {allDone && todos.length>0 && <h2>All Tasks Completed!</h2>}
        </>
    );
};