import { configureStore } from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import todoTaskListSlice from "@/redux/slices/todoTaskListSlice";
import doneTaskListSlice from "@/redux/slices/doneTaskListSlice";
export const store = configureStore({
    reducer: {
        todoTaskList: todoTaskListSlice,
        doneTaskList: doneTaskListSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch:() => AppDispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
