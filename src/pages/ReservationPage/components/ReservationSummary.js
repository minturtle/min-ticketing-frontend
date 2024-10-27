// components/ReservationSummary.jsx
function ReservationSummary({ selectedSeat, pricePerSeat, onReservation }) {
    return (
        <div className="bg-neutral-800 p-6 rounded-lg">
            <div className="space-y-6">
                <div>
                    <p className="text-sm text-gray-400 mb-1">선택된 좌석</p>
                    <p className="font-medium text-lg">
                        {selectedSeat || '좌석을 선택해주세요'}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-gray-400 mb-1">결제 금액</p>
                    <p className="font-bold text-2xl text-yellow-400">
                        {selectedSeat ? `${pricePerSeat.toLocaleString()}원` : '-'}
                    </p>
                </div>
                <button
                    onClick={onReservation}
                    disabled={!selectedSeat}
                    className={`
                        w-full py-4 rounded-lg font-bold transition-colors text-lg
                        ${selectedSeat
                            ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                            : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                        }
                    `}
                >
                    예매하기
                </button>
            </div>
        </div>
    );
}

export default ReservationSummary;