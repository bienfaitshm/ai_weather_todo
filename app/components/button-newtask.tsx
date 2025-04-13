import { ListTodoIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "@remix-run/react";


export default function ButtonNewTask() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/tasks/add");
    }
    return (
        <Button onClick={handleClick} variant="ghost" className="flex items-center gap-2 rounded-full">
            <ListTodoIcon className="w-4 h-4" />
            <span>Ajouter une tâche</span>
        </Button>
    );
}