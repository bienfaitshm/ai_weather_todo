import React from "react"
import {
    Dialog,
    DialogClose,
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
import { useCreateTask, useUpdateTask } from "@/hooks/queries"

export interface TaskFormDialogProps {
    isUpdate?: boolean,
}
export const TaskFormDialog: React.FC<TaskFormDialogProps> = ({ }) => {
    const btnSubmitRef = React.useRef<HTMLButtonElement>(null)
    const [open, setOpen] = React.useState<boolean>(false)
    const mutation = useCreateTask()
    const onSubmit = React.useCallback((task: Task) => {
        mutation.mutate(task, {
            onSuccess: () => {
                setOpen(false)
            }
        })
    }, [])
    const handleSubmit = () => {
        btnSubmitRef.current?.click()
    }

    const handleOpenChange = React.useCallback((open: boolean) => {
        setOpen(open)
    }, [])
    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
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

type TaskUpdateFormDialogProps = {
    initialValues: Task & { id: string },
}

type TaskUpdateFormDialogRef = {
    openDialog: () => void,
    closeDialog: () => void,
}

export const TaskUpdateFormDialog = React.forwardRef<TaskUpdateFormDialogRef, TaskUpdateFormDialogProps>(({ initialValues: { id, ...task } }, ref) => {
    const btnSubmitRef = React.useRef<HTMLButtonElement>(null)
    const [open, setOpen] = React.useState<boolean>(false)
    const mutation = useUpdateTask()
    const onSubmit = React.useCallback((taskUpdated: Task) => {
        mutation.mutate({ ...taskUpdated, id }, {
            onSuccess: () => {
                setOpen(false)
            }
        })
    }, [])
    const handleSubmit = React.useCallback(() => {
        btnSubmitRef.current?.click()
    }, [btnSubmitRef])

    const handleOpenChange = React.useCallback((open: boolean) => {
        setOpen(open)
    }, [])

    React.useImperativeHandle(ref, () => ({
        openDialog: () => setOpen(true),
        closeDialog: () => setOpen(false),
    }))
    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Task</DialogTitle>
                    <DialogDescription>
                        Modify the details of your task below.
                    </DialogDescription>
                </DialogHeader>
                <TaskForm
                    defaultValues={task}
                    onSubmit={onSubmit}
                    btnSubmit={() => <Button className="hidden" ref={btnSubmitRef} type="submit">Submit</Button>}
                />
                <DialogFooter>
                    <DialogClose>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <ButtonLoader
                        type="submit"
                        isLoading={mutation.isPending}
                        onClick={handleSubmit}
                        loadingText="Enregistrement..."
                    >
                        Enregistrer la modification
                    </ButtonLoader>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
})

export function useDialogUpdateTaskForm() {
    return React.useRef<TaskUpdateFormDialogRef>(null)
}