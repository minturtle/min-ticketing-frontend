import React, { useState, useCallback } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ChooseInput.css';

function PerformanceChooseInput({ startDate, endDate }) {
    const [date, setDate] = useState(null);
    const today = new Date();

    // startDate와 endDate를 Date 객체로 변환
    const start = new Date(startDate);
    const end = new Date(endDate);

    const onChange = useCallback((newDate) => {
        setDate(newDate);
    }, []);

    const tileClassName = useCallback(({ date: tileDate, view }) => {
        if (view === 'month' && date && date.toDateString() === tileDate.toDateString()) {
            return 'react-calendar__tile--active';
        }
    }, [date]);

    const tileDisabled = useCallback(({ date: tileDate, view }) => {
        if (view === 'month') {
            return tileDate < start || tileDate > end;
        }
    }, [start, end]);

    return (
        <div className="calendarWrapper">
            <div className="todayDate">
                Today: {today.toDateString()}
            </div>
            <Calendar
                onChange={onChange}
                value={date}
                className="react-calendar-custom"
                tileClassName={tileClassName}
                tileDisabled={tileDisabled}
                minDate={start}
                maxDate={end}
            />
            {date && <p className="selectedDate">Selected date: {date.toDateString()}</p>}
        </div>
    );
};

export default PerformanceChooseInput;