import React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckSquareIcon, EllipsisVertical, PencilIcon, TrashIcon } from "lucide-react";
import { TypographyH1, TypographyH3, TypographyP, TypographySmall, TypographyLarge } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Task as TaskType } from "@/lib/stores";
import { useDialogUpdateTaskForm, TaskUpdateFormDialog } from "./dialogs/task-form-dialog";
import { useDeleteDialog, DialogDeleteAction } from "./dialogs/delete-action-dialog";
import { useDeleteTask, useToggleTaskCompleted } from "@/hooks/queries";



export const Task: React.FC = () => {
    return (
        <div className="bg-purple-500/20 px-4 py-2 rounded-md">
            <TypographyLarge className="text-sm">Boire un verre</TypographyLarge>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild><TypographyP className="text-muted-foreground text-xs truncate cursor-pointer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum illum velit sint mollitia deleniti quis optio fuga minus hic,
                        at vero inventore magni? Maiores sint assumenda obcaecati maxime reiciendis exercitationem.
                    </TypographyP></TooltipTrigger>
                    <TooltipContent>
                        <TypographyP className="text-xs max-w-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum illum velit sint mollitia deleniti quis optio fuga minus hic,
                            at vero inventore magni? Maiores sint assumenda obcaecati maxime reiciendis exercitationem.</TypographyP>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}

interface TaskNoteProps {
    task: TaskType
}
/**
 * `TaskNote` is a React functional component that renders a task card with various actions
 * such as editing, marking as done, and deleting. It provides a user interface for managing
 * individual tasks with support for dialogs and dropdown menus.
 *
 * @component
 * @param {TaskNoteProps} props - The props for the `TaskNote` component.
 * @param {Task} props.task - The task object containing details such as title, description,
 * color, due date, and completion status.
 *
 * @returns {JSX.Element} A JSX element representing the task card.
 *
 * @example
 * ```tsx
 * <TaskNote task={task} />
 * ```
 *
 * @remarks
 * - The component uses several custom hooks for managing dialogs and mutations:
 *   - `useDialogUpdateTaskForm`: Hook for managing the task update form dialog.
 *   - `useDeleteDialog`: Hook for managing the delete confirmation dialog.
 *   - `useDeleteTask`: Mutation hook for deleting a task.
 *   - `useToggleTaskCompleted`: Mutation hook for toggling the task's completion status.
 * - The component includes the following actions:
 *   - **Edit**: Opens a dialog to edit the task.
 *   - **Mark as Done**: Marks the task as completed.
 *   - **Delete**: Opens a confirmation dialog to delete the task.
 *
 * @dependencies
 * - `TaskUpdateFormDialog`: A dialog component for updating task details.
 * - `DialogDeleteAction`: A dialog component for confirming task deletion.
 * - `DropdownMenu`: A dropdown menu for task actions.
 * - `TypographySmall`, `TypographyH3`, `TypographyP`: Typography components for styling text.
 * - `Badge`: A badge component to indicate task status.
 * - `Button`: A button component for triggering actions.
 * - Icons: `EllipsisVertical`, `PencilIcon`, `CheckSquareIcon`, `TrashIcon`.
 *
 * @styles
 * - The component uses Tailwind CSS classes for styling.
 * - The `data-color` attribute and inline `backgroundColor` style are used to set the task's color.
 */
export const TaskNote: React.FC<TaskNoteProps> = ({ task }) => {
    const taskUpdateFormDialog = useDialogUpdateTaskForm();
    const deleteDialog = useDeleteDialog();
    const mutationDelete = useDeleteTask();
    const mutationToogleTaskCompleted = useToggleTaskCompleted(); // Assuming you have a mutation for marking as done

    const handleDelete = React.useCallback(() => {
        deleteDialog.current?.openDialog()
    }, [deleteDialog])

    const handleConfirmDelete = React.useCallback(() => {
        mutationDelete.mutate(task.id, {
            onSuccess: () => {
                deleteDialog.current?.closeDialog()
            }
        })
    }, [mutationDelete, task.id, deleteDialog])

    const handleMarkAsDone = React.useCallback(() => {
        mutationToogleTaskCompleted.mutate(task.id, {
            onSuccess: () => {
                // Optionally close the dialog or perform other actions
            }
        })
    }, [mutationToogleTaskCompleted, task.id])

    const handleEdit = React.useCallback(() => {
        taskUpdateFormDialog.current?.openDialog()
    }, [task, taskUpdateFormDialog])

    return (
        <>
            <TaskUpdateFormDialog ref={taskUpdateFormDialog} initialValues={task} />
            <DialogDeleteAction
                ref={deleteDialog}
                isPending={mutationDelete.isPending}
                onConfirm={handleConfirmDelete}
            />
            <div
                key={task.id}
                data-color={task.color}
                style={{
                    backgroundColor: task.color,
                }}
                className={cn(
                    "relative flex flex-col justify-between border p-6 py-8 rounded-lg shadow-sm space-y-4",
                )}
            >
                <div className="border-b pb-4">
                    <TypographySmall className="text-xs">
                        {task.dueDate || "No due date"}
                    </TypographySmall>
                    <TypographyH3 className="text-lg font-semibold">
                        {task.title}
                    </TypographyH3>
                    <Badge
                        variant={task.completed ? "default" : "outline"}
                        className="text-xs"
                    >
                        {task.completed ? "Completed" : "In Progress"}
                    </Badge>
                </div>
                <TypographyP
                    className={cn(
                        "text-sm"
                    )}
                >
                    {task.description || "No description available."}
                </TypographyP>
                <div className="flex items-center justify-between mt-2">
                    <TypographySmall className="text-xs">
                        {task.title}
                    </TypographySmall>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                className="rounded-full"
                                size="icon"
                            >
                                <EllipsisVertical className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={handleEdit}>
                                <PencilIcon className="w-4 h-4" />
                                <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onSelect={handleMarkAsDone}>
                                <CheckSquareIcon className="w-4 h-4" />
                                <span>Mark as Done</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={handleDelete}>
                                <TrashIcon className="w-4 h-4" />
                                <span>Delete</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </>
    )
}