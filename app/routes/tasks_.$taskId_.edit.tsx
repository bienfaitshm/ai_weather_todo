import { ButtonLoader } from "@/components/button-loader";
import { TaskForm } from "@/components/forms/task-form";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import { useUpdateTask } from "@/hooks/queries";
import { Task } from "@/lib/schemas";
import { getTask } from "@/lib/stores";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import React from "react";

export const clientLoader = ({ params }: LoaderFunctionArgs) => {
    const taskId = params.taskId
    const task = getTask(taskId || "")
    if (!task) {
        throw new Error("Task not found")
    }
    return task
}

export default function TaskEdit() {
    const task = useLoaderData<typeof clientLoader>()
    const navigate = useNavigate()
    const mutation = useUpdateTask()
    const onSubmit = React.useCallback((newTask: Task) => {
        mutation.mutate({ ...newTask, id: task.id }, {
            onSuccess: () => {
                navigate(-1)
            }
        })
    }, [])

    const handleCancel = React.useCallback(() => {
        navigate(-1)
    }, [])
    return (
        <div className="container max-w-screen-sm mx-auto p-4 space-y-10">
            <TypographyH2>Modification de la tâche #{task.id}</TypographyH2>
            <div>
                <TaskForm defaultValues={task} onSubmit={onSubmit}
                    btnSubmit={
                        () => (
                            <div className="flex justify-end space-x-2">
                                <Button type="button" variant="outline" onClick={handleCancel}>Annuler</Button>
                                <ButtonLoader
                                    type="submit"
                                    isLoading={mutation.isPending}
                                    loadingText="Enregistrement..."
                                >
                                    Enregistrer
                                </ButtonLoader>
                            </div>
                        )
                    } />
            </div>
        </div>
    )
}