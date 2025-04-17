import { ButtonLoader } from "@/components/button-loader";
import { TaskForm, useTaskForm } from "@/components/forms/task-form";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/ui/typography";
import { useCreateTask } from "@/hooks/queries";
import { Task } from "@/lib/schemas";
import { useFetcher, useNavigate } from "@remix-run/react";
import { useToast } from "@/hooks/use-toast"

import { BrainIcon } from "lucide-react";
import React from "react";


const GenerateDescriptionButton: React.FC<{
    getTitle(): string;
    onDescriptionGenerated?(description: string): void;
}> = ({ getTitle, onDescriptionGenerated }) => {
    const fetcher = useFetcher();
    const { toast } = useToast();

    React.useEffect(() => {
        if (fetcher.state === "idle" && fetcher.data) {
            onDescriptionGenerated?.(fetcher.data as string);
        }
    }, [fetcher, onDescriptionGenerated]);

    const handleGenerateDescription = React.useCallback(() => {
        const title = getTitle();
        const trimmedTitle = title?.trim();
        if (trimmedTitle) {
            fetcher.submit(
                { title: trimmedTitle },
                {
                    action: "/action/get-description",
                    method: "post",
                    encType: "application/json",
                }
            );
        } else {
            toast({
                variant: "destructive",
                title: "Description Generation",
                description: "Please provide a task title to generate a description.",
            });
        }
    }, [getTitle, fetcher, toast]);

    return (
        <ButtonLoader
            type="button"
            className="rounded-full h-8"
            variant="outline"
            loadingText="Generating..."
            isLoading={fetcher.state === "submitting"}
            onClick={handleGenerateDescription}
        >
            <BrainIcon className="size-4 mr-1" />
            <span>Generate Description</span>
        </ButtonLoader>
    );
};

export default function Page() {
    const navigate = useNavigate()
    const mutation = useCreateTask()
    const form = useTaskForm()
    const onSubmit = React.useCallback((task: Task) => {
        mutation.mutate(task, {
            onSuccess: () => {
                navigate("/tasks")
            }
        })
    }, [])

    const handleCancel = React.useCallback(() => {
        navigate(-1)
    }, [])
    return (
        <div className="container max-w-screen-sm mx-auto p-4 space-y-10">
            <TypographyH3>Nouvelle tâche</TypographyH3>
            <div>
                <TaskForm ref={form} onSubmit={onSubmit}
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
                    }

                    btnDescription={
                        <GenerateDescriptionButton
                            getTitle={() => form.current?.getTitle() || ""}
                            onDescriptionGenerated={form.current?.setDescription}
                        />
                    }
                />

            </div>
        </div>
    )
}