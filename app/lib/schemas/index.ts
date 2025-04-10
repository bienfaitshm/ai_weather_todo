import {z} from "zod"

export const TaskSchema = z.object({
    // The title of the task, must be a non-empty string
    title: z.string().nonempty(),

    // A detailed description of the task, must be a optionnal string
    description: z.string().optional(),

    // A boolean indicating whether the task is completed or not
    completed: z.boolean(),

    // An optional string representing the color associated with the task
    color: z.string().optional(),

    // An optional string representing the due date of the task
    dueDate: z.string(),

})

export type Task = z.infer<typeof TaskSchema>;