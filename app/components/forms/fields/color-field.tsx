

const COLORS: string[] = [
    "#a1e8af",
    "#f8d7da",
    "#FFD452",
    "#715AFF",
    "#FF7F50",
    "#5887FF",
    "#FF75C8"
]

interface ColorFieldProps {
    value?: string,
    onChange?: (value: string) => void,
}
export const ColorField: React.FC<ColorFieldProps> = ({ onChange, value }) => {
    return (
        <div className="flex flex-wrap gap-3">
            {COLORS.map((color) => (
                <div key={color} className={`w-9 h-9 rounded-full border-2 border-gray-300 cursor-pointer ${value === color ? 'ring-2 ring-blue-500' : ''}`} onClick={() => onChange?.(color)} style={{ backgroundColor: color }}></div>
            ))}
            <div className="w-9 h-9 rounded-full border-2 border-gray-300 cursor-pointer" onClick={() => onChange?.('')} style={{ backgroundColor: 'transparent' }}></div>
        </div>
    )
}