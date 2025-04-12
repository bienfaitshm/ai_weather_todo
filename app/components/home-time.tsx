import { useRealTime } from "@/hooks/timer"
import { formatDateTime, FORMAT_DATE } from "@/lib/date-time"
import { TypographyH1, TypographyH3 } from "./ui/typography"


export const HomeDateTimer: React.FC = () => {
    const time = useRealTime()
    return (
        <div className="flex flex-col items-center">
            <TypographyH1 className="text-7xl lg:text-8xl capitalize dark:text-white">{formatDateTime(time, FORMAT_DATE.HOME_TIME)}</TypographyH1>
            <TypographyH3 className="text-lg font-normal capitalize dark:text-neutral-300">{formatDateTime(time, FORMAT_DATE.HOME_DATE)}</TypographyH3>
        </div>
    )
}