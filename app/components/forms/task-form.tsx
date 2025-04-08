"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TaskSchema, Task } from "@/lib/schemas"

const DEFAULT_VALUES: Task = {
    title: "",
    description: "",
    color: "",
    completed: false
}

interface TaskFormProps {
    defaultValues?: Task,
    onSubmit?: (values: Task) => void
}
export const TaskForm: React.FC<TaskFormProps> = ({ defaultValues, onSubmit }) => {
    const form = useForm<Task>({
        resolver: zodResolver(TaskSchema),
        defaultValues: {
            ...DEFAULT_VALUES,
            ...defaultValues,
        },
    })

    function handleSubmit(values: Task) {
        console.log("Form submitted with values:", values)
        // Perform any additional actions with the form values here

    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <input {...form.register("title")} placeholder="Username" />
            <button type="submit">Submit</button>
        </form>
    )
}

