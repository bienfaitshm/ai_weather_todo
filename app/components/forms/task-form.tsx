"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TaskSchema, Task } from "@/lib/schemas"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { ColorField } from "./fields/color-field";
import { Textarea } from "../ui/textarea";
import React from "react";

const DEFAULT_VALUES: Task = {
    title: "",
    description: "",
    color: "",
    completed: false,
    dueDate: "",
}

interface TaskFormProps {
    defaultValues?: Task,
    onSubmit?: (values: Task) => void,
    btnSubmit?: (isValid: boolean) => React.ReactNode,
}
export const TaskForm: React.FC<TaskFormProps> = ({ defaultValues, onSubmit, btnSubmit }) => {
    const form = useForm<Task>({
        resolver: zodResolver(TaskSchema),
        defaultValues: {
            ...DEFAULT_VALUES,
            ...defaultValues,
        },
    })

    function handleSubmit(values: Task) {
        onSubmit?.(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Title" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Color</FormLabel>
                            <FormControl>
                                <ColorField value={field.value} onChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="completed"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>Mark as Completed</FormLabel>
                                <FormDescription>
                                    Toggle this to mark the task as completed.
                                </FormDescription>
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="dueDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Due Date</FormLabel>
                            <FormControl>
                                <Input
                                    type="date"
                                    {...field}
                                    value={field.value}
                                    placeholder="Due Date"
                                />
                            </FormControl>
                            <FormMessage />

                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder="Description" />
                            </FormControl>
                            <FormMessage />
                            <FormDescription>
                                Provide a detailed description of the task to help clarify its purpose or requirements.
                            </FormDescription>
                        </FormItem>
                    )}
                />

                {btnSubmit ? btnSubmit(!form.formState.isValid) : null}
            </form>
        </Form>
    )
}

