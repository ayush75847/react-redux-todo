import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return (
        <>
            <h3>Todo List App</h3>
            <ul className="list-disc pl-5">
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
            <AddTodo/>
        </>
    )
};