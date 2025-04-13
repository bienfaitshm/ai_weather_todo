import { useGetTasks } from "@/hooks/queries";
import { TypographyH1 } from "@/components/ui/typography";
import { TaskNote } from "@/components/task";



const TaskList = () => {
    const { data: tasks } = useGetTasks();

    return (
        <div>
            {tasks?.length === 0 && (
                <div className="text-center">
                    <p>No tasks found.</p>
                </div>
            )}
            <div className="grid lg:grid-cols-3 gap-4 mt-4">
                {tasks?.map((task) => (
                    <TaskNote key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default function Tasks() {

    return (
        <div className="container max-w-screen-lg mx-auto p-4 space-y-5">
            <TypographyH1>Tasks</TypographyH1>
            <TaskList />
        </div>
    )
}