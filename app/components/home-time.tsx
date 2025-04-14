import { useRealTime } from "@/hooks/timer"
import { format } from "date-fns"
import { TypographyH3 } from "./ui/typography"

export const HomeDateTimer = () => {
    const date = useRealTime()

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold">{date.toLocaleDateString()}</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <TypographyH3 className="text-4xl">{format(date, "HH")}</TypographyH3>
                <TypographyH3 className="text-4xl">{format(date, ": mm")}</TypographyH3>
                <div className="flex items-end">
                    <TypographyH3>{format(date, "ss")}</TypographyH3>
                </div>
            </div>
        </div>
    )
}