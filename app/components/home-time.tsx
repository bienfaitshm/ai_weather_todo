import { useRealTime } from "@/hooks/timer"
import { formatDateTime, FORMAT_DATE } from "@/lib/date-time"


export const HomeDateTimer: React.FC = () => {
    const time = useRealTime()
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold capitalize">{formatDateTime(time, FORMAT_DATE.HOME_TIME)}</h1>
            <h3 className="text-md capitalize">{formatDateTime(time, FORMAT_DATE.HOME_DATE)}</h3>
        </div>
    )
}