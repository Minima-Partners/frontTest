import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import DoneTaskItem from "@/components/todos/TaskList/DoneTaskList/DoneTaskItem/DoneTaskItem";

export default function DoneTaskList(){
    const taskItems = useSelector((state:RootState) => state.doneTaskList.taskItems);
    return (
        <div className={"flex flex-col px-16 py-8 w-full"}>
            <h2 className={"text-2xl font-bold text-center p-4"}>Done</h2>
            <div className={"border-2 border-sky-500 h-56 overflow-y-scroll"}>
                {
                    taskItems.map((item, index) => {
                        return <DoneTaskItem key={index} task={item} taskIndex={index}/>
                    })
                }
            </div>
        </div>
    )
}
