"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TaskSchema, Task } from "@/lib/schemas"
import { Form as RemixForm } from "@remix-run/react";
import { Button } from "@/components/ui/button"
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

const DEFAULT_VALUES: Task = {
    title: "",
    description: "",
    color: "",
    completed: false
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
        console.log("Form submitted with values:", values)
        // Perform any additional actions with the form values here

    }

    return (
        <Form {...form}>
            <RemixForm onSubmit={form.handleSubmit(handleSubmit)}>
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
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Description" />
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
                                <Input {...field} placeholder="Color" />
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
                                <FormLabel>
                                    Use different settings for my mobile devices
                                </FormLabel>
                                <FormDescription>
                                    You can manage your mobile notifications in the{" "}
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
                                <Input type="date" {...field} placeholder="Due Date" />
                            </FormControl>
                            <FormMessage />
                            <FormDescription>
                                This is a description of the form field. It can be used to provide additional information to the user.
                            </FormDescription>
                        </FormItem>
                    )}
                />
                {btnSubmit ? btnSubmit(!form.formState.isValid) : null}
            </RemixForm>
        </Form>
    )
}

