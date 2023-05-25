import TodoTaskList from "@/components/todos/TaskList/TodoTaskList/TodoTaskList"
import DoneTaskList from "@/components/todos/TaskList/DoneTaskList/DoneTaskList";
export default function TaskList(){


    return (
        <div className={"flex justify-between space-x-8 px-16 py-8"}>
            <TodoTaskList/>
            <DoneTaskList/>
        </div>
    )
}
