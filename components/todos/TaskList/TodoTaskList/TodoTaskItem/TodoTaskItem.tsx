import Task from "@/models/Task";
import {useDispatch} from "react-redux";
import {addDoneTask} from "@/store/slices/doneTaskListSlice";
import {removeTodoTask} from "@/store/slices/todoTaskListSlice";

export interface TodoTaskItemInput{
    task:Task;
    taskIndex:number;
}

export default function TodoTaskItem({task, taskIndex}:TodoTaskItemInput){
    const dispatch = useDispatch();

    const doneTask = () =>{
        dispatch(removeTodoTask(task))
        dispatch(addDoneTask(task))
    }

    return (
        <div className={"flex items-center justify-between p-4 w-full"}>
            <div className={""}>
                {task.taskName}
            </div>
            <div className={""}>
                {task.taskDescription}
            </div>
            <button onClick={doneTask} className={"p-2 bg-sky-500 hover:bg-lime-500 rounded-lg text-white font-bold text-md"}>Done</button>
        </div>

    )
}
