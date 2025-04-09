

const COLORS: string[] = [
    '#FF5733', // Vibrant Orange
    '#33FF57', // Bright Green
    '#FF33A1', // Hot Pink
    '#FFD700', // Gold
    '#00CED1', // Dark Turquoise
    '#FF4500', // Orange Red
    '#2E8B57', // Sea Green
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