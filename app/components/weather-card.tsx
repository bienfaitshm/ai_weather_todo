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
    description: string;
    temperature: number;
    weatherCondition: string;
    rainChance: string;
    humidity: string;
    icon: React.ReactNode;
}
export const WeatherCard: React.FC<WeatherCardProps> = ({ title, description, humidity, rainChance, temperature, weatherCondition, icon }) => {
    return (
        <Card className="px-5">
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