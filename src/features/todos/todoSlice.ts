import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateTodo } from "./type";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        filter: 'all'
    } as StateTodo,
    reducers: {
        addTodo: (state: StateTodo, action: PayloadAction<string>) => {
            state.items.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        removeTodo: (state: StateTodo, action: PayloadAction<number>) => {
            state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;