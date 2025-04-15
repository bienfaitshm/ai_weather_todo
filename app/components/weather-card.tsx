import { TypographyH1, TypographyH3, TypographyH4, TypographyP, TypographySmall } from "./ui/typography";

export interface WeatherCardProps {
    title: string;
    description?: string;
    temperature: number | string;
    weatherCondition: string;
    rainChance: string;
    humidity: string;
    icon: React.ReactNode;
}
export const WeatherCard: React.FC<WeatherCardProps> = ({ title, description, humidity, rainChance, temperature, weatherCondition, icon }) => {
    return (
        <div className="px-5 rounded-lg w-full max-w-sm">
            <div>
                <TypographyH4>{title}</TypographyH4>
                <TypographySmall>{description}</TypographySmall>
            </div>
            <div className="flex items-end gap-10">
                <div className="space-y-1">
                    <TypographyH1 className="text-4xl font-bold tracking-widest my-4">{temperature}°</TypographyH1>
                    <TypographyP className="text-xs truncate">{weatherCondition}</TypographyP>
                    <TypographyP className="text-xs truncate">{rainChance}</TypographyP>
                    <TypographyP className="text-xs truncate">{humidity}</TypographyP>
                </div>
                {icon}
            </div>
        </div>
    )
}