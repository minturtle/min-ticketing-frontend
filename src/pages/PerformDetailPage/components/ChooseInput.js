import React, { useState, useCallback } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ChooseInput.css';

function PerformanceChooseInput({ startDate, endDate }) {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    const start = new Date(startDate);
    const end = new Date(endDate);

    const onChange = useCallback((newDate) => {
        setDate(newDate);
    }, []);

    const tileDisabled = useCallback(({ date, view }) => {
        return view === 'month' && (date < start || date > end);
    }, [start, end]);

    const formatShortWeekday = (locale, date) => {
        return ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
    };

    const formatMonthYear = (locale, date) => {
        return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
    };

    const formatDay = (locale, date) => {
        return date.getDate();
    };

    return (
        <div className="performanceChooseInputWrapper">
            <div className="calendarWrapper">
                <Calendar
                    onChange={onChange}
                    value={date}
                    className="react-calendar-custom"
                    tileDisabled={tileDisabled}
                    minDate={start}
                    maxDate={end}
                    formatShortWeekday={formatShortWeekday}
                    formatMonthYear={formatMonthYear}
                    formatDay={formatDay}
                />
            </div>
            <div className="selectionInfo">
                {date && (
                    <div className="dateTimeSelection">
                        <select onChange={(e) => setTime(e.target.value)}>
                            <option value="">시간 선택</option>
                            <option value="14:00">14:00</option>
                            <option value="19:30">19:30</option>
                        </select>
                    </div>
                )}
                {date && time && (
                    <button className="bookingButton">예매하기</button>
                )}
            </div>
        </div>
    );
}

export default PerformanceChooseInput;