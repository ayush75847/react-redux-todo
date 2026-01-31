import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            }

            state.todos.push(newTodo);
        },

        deleteTask: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        markAsDone: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload);
            if (todo) todo.isDone = true;
        }
    }
});

export const { addTask, deleteTask, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;