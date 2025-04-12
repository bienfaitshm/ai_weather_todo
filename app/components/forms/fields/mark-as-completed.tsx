import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel, FormDescription } from "@/components/ui/form";

interface MarkAsCompletedProps {
    value: boolean,
    onChange: (value: boolean) => void,
}

export const MarkAsCompleted: React.FC<MarkAsCompletedProps> = ({ onChange, value }) => {
    return (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
            <FormControl>
                <Checkbox
                    checked={value}
                    onCheckedChange={onChange}
                />
            </FormControl>
            <div className="space-y-1 leading-none">
                <FormLabel>Mark as Completed</FormLabel>
                <FormDescription>
                    Toggle this to mark the task as completed.
                </FormDescription>
            </div>
        </FormItem>
    )
};