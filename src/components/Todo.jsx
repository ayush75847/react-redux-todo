import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";
import AllDone from "./AllDone";
import NoTask from "./NoTask";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    function updateDelete(id) {
        dispatch(deleteTask(id));
    }

    function updateDone(id){
        dispatch(markAsDone(id));
    }

    return (
        <>
            <AddTodo />
            <div>
                <h3>Todo List App</h3>
            <ul className="list-disc pl-5">
                {todos.map((todo) => (
                    <li key={todo.id} className={`${todo.isDone ? "line-through" : ""}`}>{todo.task}
                        <span>
                            <button onClick={() => updateDelete(todo.id)}>Delete</button>
                            <button onClick={() => updateDone(todo.id)}>Completed</button>
                        </span>
                    </li>
                ))}
            </ul>

            <AllDone/>
            <NoTask/>

            </div>
            

        </>
    )
};