import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Task from "@/models/Task";

export interface TodoTaskListState {
    value: Task[];
}

const initialState: TodoTaskListState = {
    value: [],
}

export const doneTaskListSlice = createSlice({
    name: 'doneTaskList',
    initialState,
    reducers: {
        addTodoTask: (state,action: PayloadAction<Task>) => {
            state.value.push(action.payload);
        },
        removeTodoTask: (state,action: PayloadAction<Task>) => {
            const index = state.value.indexOf(action.payload);
            state.value.splice(index, 1);
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTodoTask, removeTodoTask } = doneTaskListSlice.actions

export default doneTaskListSlice.reducer
