import { useRealTime } from "@/hooks/timer"


export const HomeDateTimer = () => {
    const date = useRealTime()

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold text-white">{date.toLocaleDateString()}</h1>
            <p className="text-2xl text-gray-200">{date.toLocaleTimeString()}</p>
        </div>
    )
}