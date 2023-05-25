import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Task from "@/models/Task";

export interface TodoTaskListState {
    taskItems: Task[];
}

const initialState: TodoTaskListState = {
    taskItems: [],
}

export const doneTaskListSlice = createSlice({
    name: 'doneTaskList',
    initialState,
    reducers: {
        addDoneTask: (state,action: PayloadAction<Task>) => {
            state.taskItems.push(action.payload);
        },
        removeDoneTask: (state,action: PayloadAction<Task>) => {
            const index = state.taskItems.findIndex((task) => task.taskName === action.payload.taskName && task.taskDescription ===action.payload.taskDescription);
            state.taskItems.splice(index, 1);
        },
    },
})

// Action creators are generated for each case reducer function
export const { addDoneTask, removeDoneTask } = doneTaskListSlice.actions

export default doneTaskListSlice.reducer
