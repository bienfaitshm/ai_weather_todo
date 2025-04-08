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

export interface TaskFormDialogProps {
    isUpdate?: boolean
}
export const TaskFormDialog: React.FC<TaskFormDialogProps> = ({ }) => {
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
                <TaskForm />
            </DialogContent>
            <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Submit</Button>
            </DialogFooter>
        </Dialog>
    )
}