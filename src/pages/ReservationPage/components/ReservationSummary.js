// components/ReservationSummary.jsx
function ReservationSummary({ selectedSeats, totalPrice, onReservation }) {
    return (
        <div className="bg-neutral-800 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-sm mb-1">선택된 좌석</p>
                    <p className="font-medium">
                        {Array.from(selectedSeats).join(', ') || '없음'}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm mb-1">총 결제금액</p>
                    <p className="font-bold text-xl text-yellow-400">
                        {totalPrice.toLocaleString()}원
                    </p>
                </div>
            </div>
            <button
                onClick={onReservation}
                disabled={selectedSeats.size === 0}
                className={`
                    w-full py-3 rounded-lg font-bold transition-colors
                    ${selectedSeats.size > 0
                        ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                        : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                    }
                `}
            >
                예매하기
            </button>
        </div>
    );
}

export default ReservationSummary;