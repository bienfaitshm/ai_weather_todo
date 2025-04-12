import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export interface WeatherCardProps {
    title: string;
    description?: string;
    temperature: number;
    weatherCondition: string;
    rainChance: string;
    humidity: string;
    icon: React.ReactNode;
}
export const WeatherCard: React.FC<WeatherCardProps> = ({ title, description, humidity, rainChance, temperature, weatherCondition, icon }) => {
    return (
        <Card className="px-5 bg-transparent backdrop-blur-md dark:text-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-md w-full max-w-sm">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-end gap-10">
                    <div>
                        <h1 className="text-4xl font-bold">{temperature}°</h1>
                        <p className="text-xs">{weatherCondition}</p>
                        <p className="text-xs">Chance of Rain {rainChance}</p>
                        <p className="text-xs">Humidity {humidity}</p>
                    </div>
                    {icon}
                </div>
            </CardContent>
        </Card>
    )
}