import { ButtonLoader } from "@/components/button-loader";
import { TaskForm } from "@/components/forms/task-form";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import { useCreateTask } from "@/hooks/queries";
import { Task } from "@/lib/schemas";
import { useNavigate } from "@remix-run/react";
import React from "react";


export default function Page() {
    const navigate = useNavigate()
    const mutation = useCreateTask()
    const onSubmit = React.useCallback((task: Task) => {
        mutation.mutate(task, {
            onSuccess: () => {
            }
        })
    }, [])

    const handleCancel = React.useCallback(() => {
        navigate("/tasks")
    }, [])
    return (
        <div className="container max-w-screen-sm mx-auto p-4 space-y-10">
            <TypographyH1>Nouvelle tâche</TypographyH1>
            <div>
                <TaskForm onSubmit={onSubmit}
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