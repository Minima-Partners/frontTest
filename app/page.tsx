'use client';
import TaskForm from "@/components/todos/forms/TaskForm";
import TaskList from "@/components/todos/TaskList";
import TaskTitle from "@/components/todos/TaskTitle";
import { Provider } from 'react-redux';
import {store} from "@/store/store";
export default function Home() {
    return (
        <Provider store={store}>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="container mx-auto">
                    <div className="flex flex-col bg-white rounded-2xl shadow-xl p-4">
                        <TaskTitle/>
                        <TaskForm/>
                        <TaskList/>
                    </div>
                </div>
            </main>
        </Provider>
    )
}
