// components/SeatLegend.jsx
function SeatLegend() {
    const legendItems = [
        { color: 'bg-neutral-800', label: '선택 가능' },
        { color: 'bg-yellow-400', label: '선택됨' },
        { color: 'bg-neutral-700', label: '예매됨' },
    ];

    return (
        <div className="flex gap-4 justify-center mb-8">
            {legendItems.map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${color} rounded`}></div>
                    <span className="text-sm">{label}</span>
                </div>
            ))}
        </div>
    );
}

export default SeatLegend;