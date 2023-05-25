import Task from "@/models/Task";
import {useDispatch} from "react-redux";
import {removeDoneTask} from "@/store/slices/doneTaskListSlice";
import {addTodoTask} from "@/store/slices/todoTaskListSlice";

export interface TodoTaskItemInput{
    task:Task;
    taskIndex:number;
}

export default function DoneTaskItem({task, taskIndex}:TodoTaskItemInput){
    const dispatch = useDispatch();

    const canselTask = () =>{
        dispatch(removeDoneTask(task));
        dispatch(addTodoTask(task));
    }

    return (
        <div className={"flex items-center justify-between p-4 w-full"}>
            <div className={""}>
                {task.taskName}
            </div>
            <div className={""}>
                {task.taskDescription}
            </div>
            <button onClick={canselTask} className={"p-2 bg-sky-500 hover:bg-red-500 rounded-lg text-white font-bold text-md"}>Cansel</button>
        </div>

    )
}
