import { useRealTime } from "@/hooks/timer"
import { formatDateTime, FORMAT_DATE } from "@/lib/date-time"
import { TypographyH1, TypographyH3 } from "./ui/typography"


export const HomeDateTimer: React.FC = () => {
    const time = useRealTime()
    return (
        <div className="flex flex-col items-center">
            <TypographyH1 className="lg:text-7xl capitalize">{formatDateTime(time, FORMAT_DATE.HOME_TIME)}</TypographyH1>
            <TypographyH3 className="text-md font-normal capitalize">{formatDateTime(time, FORMAT_DATE.HOME_DATE)}</TypographyH3>
        </div>
    )
}