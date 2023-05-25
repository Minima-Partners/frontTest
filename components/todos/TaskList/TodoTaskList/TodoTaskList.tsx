import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import TodoTaskItem from "@/components/todos/TaskList/TodoTaskList/TodoTaskItem/TodoTaskItem";

export default function TodoTaskList(){
    const taskItems = useSelector((state:RootState) => state.todoTaskList.taskItems);
    return (
        <div className={"flex flex-col px-16 py-8 w-full"}>
            <h2 className={"text-2xl font-bold text-center p-4"}>Todo</h2>
            <div className={"border-2 border-sky-500 h-56 overflow-y-scroll"}>
                {
                    taskItems.map((item, index) => {
                        return <TodoTaskItem key={index} task={item} taskIndex={index}/>
                    })
                }
            </div>
        </div>
    )
}
