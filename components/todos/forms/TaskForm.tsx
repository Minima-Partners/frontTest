'use client';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {addTodoTask} from "@/store/slices/todoTaskListSlice";

const schema = yup.object({
    taskName: yup.string().required(),
    taskDescription: yup.string().required(),
}).required();

export default function TaskForm(){
    // const todoTaskListItems = useSelector((state:RootState) => state.todoTaskList.taskItems);
    const dispatch = useDispatch();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data:any) => {
        // console.log("data");
        // console.log(data);
        dispatch(addTodoTask({taskName:data.taskName, taskDescription:data.taskDescription}))
    };

    return (
        <form className={"flex justify-center space-x-8 px-16 py-8"} onSubmit={handleSubmit(onSubmit)}>
            <div className={"flex items-center w-full"}>
                <div className={"flex items-center space-y-4 w-2/12"}>
                    <h2 className={"font-extrabold text-sky-500 text-3xl"}>New Task</h2>
                </div>
                <div className={"flex flex-col items-center justify-center w-4/12"}>
                    <input id={"taskName"} type={"text"} defaultValue="" {...register("taskName")} className={"p-4 rounded-2xl font-bold text-md focus:outline-none text-sky-500 placeholder:text-sky-500 focus:placeholder:text-transparent focus:bg-sky-100 border-2 border-sky-500 "} placeholder="New TaskState" required/>
                    <p>{errors.firstName?.message?.toString()}</p>
                </div>
                <div className={"flex flex-col items-center justify-center w-8/12"}>
                    <input id={"taskDescription"} type={"text"} defaultValue="" {...register("taskDescription")} className={"p-4 rounded-2xl font-bold text-md focus:outline-none text-sky-500 placeholder:text-sky-500 focus:placeholder:text-transparent focus:bg-sky-100 border-2 border-sky-500 w-full"} placeholder="TaskState Description" required/>
                    <p>{errors.firstName?.message?.toString()}</p>
                </div>
                <div className={"flex justify-center items-center w-2/12"}>
                    <button type={"submit"} name={"submit"} className={"p-4 bg-sky-500 hover:bg-lime-500 rounded-2xl text-white font-extrabold text-xl"}>
                        Add Task
                    </button>
                </div>
            </div>
        </form>

    )
}
