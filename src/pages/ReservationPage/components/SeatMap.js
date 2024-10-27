// components/SeatMap.jsx
function SeatMap({ seats, selectedSeats, onSeatClick }) {
    return (
        <div className="mb-12">
            <div className="grid gap-3 justify-center">
                {seats.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex gap-3 justify-center">
                        {row.map((seat) => (
                            <button
                                key={seat.uid}
                                onClick={() => onSeatClick(seat)}
                                disabled={seat.isReserved}
                                className={`
                                    w-14 h-14 rounded-lg flex items-center justify-center text-base font-medium
                                    transition-colors duration-200
                                    ${seat.isReserved
                                        ? 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
                                        : selectedSeats.has(seat.uid)
                                            ? 'bg-yellow-400 text-black'
                                            : 'bg-neutral-800 text-white hover:bg-neutral-700'
                                    }
                                `}
                            >
                                {seat.name}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SeatMap;