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
export const TaskNote: React.FC<TaskNoteProps> = ({ task }) => {
    const taskUpdateFormDialog = useDialogUpdateTaskForm()
    return (
        <>
            <TaskUpdateFormDialog ref={taskUpdateFormDialog} initialValues={task} />
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
                            <DropdownMenuItem onSelect={() => {
                                taskUpdateFormDialog.current?.openDialog()
                            }}>
                                <PencilIcon className="w-4 h-4" />
                                <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CheckSquareIcon className="w-4 h-4" />
                                <span>Mark as Done</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
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