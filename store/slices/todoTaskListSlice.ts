import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Task from "@/models/Task";

export interface TodoTaskListState {
    taskItems: Task[];
}

const initialState: TodoTaskListState = {
    taskItems: [
        // {taskName:"Task 1", taskDescription:"Task 1"},
        // {taskName:"Task 2", taskDescription:"Task 2"},
        // {taskName:"Task 3", taskDescription:"Task 3"}
    ],
}

export const todoTaskListSlice = createSlice({
    name: 'todoTaskList',
    initialState,
    reducers: {
        addTodoTask: (state,action: PayloadAction<Task>) => {
            const val = state.taskItems.push(action.payload);
        },
        removeTodoTask: (state,action: PayloadAction<Task>) => {
            const index = state.taskItems.findIndex((task) => task.taskName === action.payload.taskName && task.taskDescription ===action.payload.taskDescription);
            state.taskItems.splice(index, 1);
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTodoTask, removeTodoTask } = todoTaskListSlice.actions

export default todoTaskListSlice.reducer
