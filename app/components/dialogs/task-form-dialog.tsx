import React from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlusCircleIcon } from "lucide-react"
import { TaskForm } from "../forms/task-form"
import { ButtonLoader } from "../button-loader"
import type { Task } from "@/lib/schemas"
import { useCreateTask } from "@/hooks/queries"

export interface TaskFormDialogProps {
    isUpdate?: boolean,
}
export const TaskFormDialog: React.FC<TaskFormDialogProps> = ({ }) => {
    const btnSubmitRef = React.useRef<HTMLButtonElement>(null)
    const mutation = useCreateTask()
    const onSubmit = React.useCallback((task: Task) => {
        mutation.mutate(task)
    }, [])
    const handleSubmit = () => {
        btnSubmitRef.current?.click()
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="rounded-full"><PlusCircleIcon /> <span>Nouvelle tache</span></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Task Form</DialogTitle>
                    <DialogDescription>
                        This is a simple task form dialog.
                    </DialogDescription>
                </DialogHeader>
                <TaskForm
                    onSubmit={onSubmit}
                    btnSubmit={() => <Button className="hidden" ref={btnSubmitRef} type="submit">Submit</Button>}
                />
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <ButtonLoader
                        type="submit"
                        isLoading={mutation.isPending}
                        onClick={handleSubmit}
                        loadingText="Enregistrement..."
                    >
                        Enregistrer
                    </ButtonLoader>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}