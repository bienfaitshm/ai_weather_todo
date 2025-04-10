import { Button } from "@/components/ui/button";
import { TaskFormDialog } from "@/components/dialogs/task-form-dialog";
import { useGetTasks } from "@/hooks/queries";
import { cn } from "@/lib/utils";
import { CheckSquareIcon, EllipsisVertical, PencilIcon, TrashIcon } from "lucide-react";
import { TypographyH3, TypographyP, TypographySmall } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const TaskList = () => {
    const { data: tasks } = useGetTasks();

    return (
        <div>
            {tasks?.length === 0 && (
                <div className="col-span-4 text-center">
                    <p>No tasks found.</p>
                </div>
            )}
            <div className="grid grid-cols-3 gap-4 mt-4">
                {tasks?.map((task) => (
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
                            <TypographySmall className="text-xs text-muted-foreground">
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
                                "text-sm",
                                !task.description && "text-muted-foreground"
                            )}
                        >
                            {task.description || "No description available."}
                        </TypographyP>
                        <div className="flex items-center justify-between mt-2">
                            <TypographySmall className="text-xs text-muted-foreground">
                                {task.title}
                            </TypographySmall>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        className="rounded-full"
                                        variant="outline"
                                        size="icon"
                                    >
                                        <EllipsisVertical className="w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
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
                ))}
            </div>
        </div>
    );
};

export default function Tasks() {

    return (
        <div className="container max-w-screen-lg mx-auto p-4">
            <h1>Tasks</h1>
            <p>List of tasks</p>
            <TaskFormDialog />
            <TaskList />
        </div>
    )
}