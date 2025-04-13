"use client"

import * as React from "react"
import { addDays, format, setHours, setMinutes } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type DatePickerWithPresetsProps = {
    value?: Date
    onChange?: (date: Date) => void
}
export const DatePickerWithPresets: React.FC<DatePickerWithPresetsProps> = ({ value: date, onChange }) => {
    const timeValue = date ? format(date, "HH:mm") : "00:00";

    const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const time = e.target.value;

        if (date) {
            const [hours, minutes] = time.split(":").map(Number);
            onChange?.(setHours(setMinutes(date, minutes), hours));
        }
    };

    const handleDaySelect = (selectedDate: Date | undefined) => {
        if (!selectedDate) {
            onChange?.(new Date());
            return;
        }

        const [hours, minutes] = timeValue.split(":").map(Number);
        const newDate = setHours(setMinutes(selectedDate, minutes), hours);
        onChange?.(newDate);
    };
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {date ? format(date, "dd/MM/yyyy 'a' HH'h'mm") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent
                align="start"
                className="flex w-auto flex-col space-y-2 p-2"
            >
                <div className="grid grid-cols-2 gap-2">
                    <Select
                        onValueChange={(value) =>
                            onChange?.(addDays(new Date(), parseInt(value)))
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="0">Today</SelectItem>
                            <SelectItem value="1">Tomorrow</SelectItem>
                            <SelectItem value="3">In 3 days</SelectItem>
                            <SelectItem value="7">In a week</SelectItem>
                        </SelectContent>
                    </Select>
                    <div>
                        {/* <Label className="mb-2" htmlFor="time">Time</Label> */}
                        <Input type="time" value={timeValue} onChange={handleTimeChange} />
                    </div>
                </div>

                <div className="rounded-md border">
                    <Calendar mode="single" selected={date} onSelect={handleDaySelect} />
                </div>

            </PopoverContent>
        </Popover>
    )
}
