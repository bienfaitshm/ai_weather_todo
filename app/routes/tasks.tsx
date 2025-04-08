import { ActionFunctionArgs } from "@remix-run/node";
import type { Task as TaskDataType } from "@/lib/schemas";
import { TaskForm } from "@/components/forms/task-form";
import { Button } from "@/components/ui/button";
import { TaskFormDialog } from "@/components/dialogs/task-form-dialog";

export const action = async ({
    params,
    request,
}: ActionFunctionArgs) => {
    const formData = await request.formData();
    const values = Object.fromEntries(formData) as unknown as TaskDataType;
    console.log("Form submitted with values:", values);
    // Perform any additional actions with the form values here
};

export default function Tasks() {
    return (
        <div className="container max-w-screen-lg mx-auto p-4">
            <h1>Tasks</h1>
            <p>List of tasks</p>
            <TaskFormDialog />
        </div>
    )
}