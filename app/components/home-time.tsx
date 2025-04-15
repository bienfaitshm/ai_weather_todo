import { useRealTime } from "@/hooks/timer"
import { format } from "date-fns"
import { TypographyH1, TypographyH3 } from "./ui/typography"
import { formatDateTime, FORMAT_DATE } from "@/lib/date-time"


export const HomeDateTimer = () => {
    const date = useRealTime()

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="grid grid-cols-5 gap-4 mt-4 px-5">
                <TypographyH1 className="lg:text-8xl col-span-4">{formatDateTime(date, FORMAT_DATE.HOME_TIME)}</TypographyH1>
                <div className="flex items-end mb-2 max-w-10 ">
                    <TypographyH3 className="text-lg">{format(date, FORMAT_DATE.SECOND)}</TypographyH3>
                </div>
            </div>
            <div className="text-2xl mt-4">{formatDateTime(date, FORMAT_DATE.HOME_DATE)}</div>
        </div>
    )
}