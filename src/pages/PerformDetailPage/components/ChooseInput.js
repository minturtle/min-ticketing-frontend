import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function PerformanceChooseInput({ performanceId, dateInfo }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();

    const formatDate = (dateTimeStr) => {
        const date = new Date(dateTimeStr);
        return {
            date: date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'short'
            }),
            time: date.toLocaleTimeString('ko-KR', {
                hour: '2-digit',
                minute: '2-digit'
            }),
        }
    };

    const handleReservation = () => {
        if (selectedDate) {
            navigate(`/reservation/${performanceId}/${selectedDate}`);
        }
    };

    return (
        <div className="flex flex-col max-w-[300px] mx-auto bg-neutral-900 p-5 rounded-lg">
            <h3 className="text-lg font-bold mb-4 text-white text-center">날짜/시간 선택</h3>

            <div className="space-y-2">
                {dateInfo.map((info) => {
                    const { date, time } = formatDate(info.dateTime);
                    const isPast = new Date(info.dateTime) < new Date(); // 현재 시각과 showtime 비교
                    return (
                        <button
                            key={info.uid}
                            className={`w-full p-3 rounded-lg border transition-all ${isPast
                                ? 'bg-neutral-700 text-neutral-500 border-neutral-600 cursor-not-allowed'
                                : selectedDate === info.uid
                                    ? 'bg-yellow-400 text-neutral-900 border-yellow-400'
                                    : 'bg-neutral-800 text-white border-neutral-700 hover:border-yellow-400'
                                }`}
                            onClick={() => !isPast && setSelectedDate(info.uid)} // 과거 버튼은 클릭 불가
                            disabled={isPast} // 비활성화
                        >
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-medium">{date}</span>
                                <div className="flex justify-between w-full mt-1">
                                    <span className="text-sm">{time}</span>
                                    <span
                                        className={`text-sm ${isPast
                                            ? 'text-neutral-500'
                                            : selectedDate === info.uid
                                                ? 'text-neutral-900'
                                                : 'text-yellow-400'
                                            }`}
                                    >
                                        {isPast ? '이미 종료된 공연입니다!' : `${info.remaining}/${info.total}석`}
                                    </span>
                                </div>
                            </div>
                        </button>
                    );
                })}


            </div>

            <button
                onClick={handleReservation}
                disabled={!selectedDate}
                className={`mt-4 py-3 px-4 rounded-lg font-bold text-sm transition-colors ${selectedDate
                    ? 'bg-yellow-400 text-neutral-900 hover:bg-yellow-300'
                    : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                    }`}
            >
                예매하기
            </button>
        </div>
    );
}

export default PerformanceChooseInput;