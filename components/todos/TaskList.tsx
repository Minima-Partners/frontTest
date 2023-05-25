"use client";

import TaskList from "@/components/TaskList";

export default function TodoTaskList(){


    return (
        <div className={"flex justify-between space-x-8 px-16 py-8"}>
            <TaskList title={"Todo"}/>
            <TaskList title={"Done"}/>
        </div>
    )
}
