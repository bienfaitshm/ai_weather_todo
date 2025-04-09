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
import { useFetcher } from "@remix-run/react"
import { ButtonLoader } from "../button-loader"

export interface TaskFormDialogProps {
    isUpdate?: boolean,
}
export const TaskFormDialog: React.FC<TaskFormDialogProps> = ({ }) => {
    const fetcher = useFetcher()
    const btnSubmitRef = React.useRef<HTMLButtonElement>(null)

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
                    onSubmit={(value) => {
                        console.log({ value })
                        fetcher.submit(value, {
                            method: "POST",
                            action: "/tasks"
                        })
                    }}
                    btnSubmit={() => <Button className="hidden" ref={btnSubmitRef} type="submit">Submit</Button>}
                />
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <ButtonLoader
                        type="submit"
                        isLoading={fetcher.state === "loading"}
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