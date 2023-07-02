/* eslint-disable tailwindcss/no-custom-classname */
import './CalendarWidget.module.css';

import React, { useEffect, useRef, useState } from 'react';

const CalendarWidget = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const calendarRef = useRef(null);
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      year: 'numeric',
    };
    setCurrentMonth(currentDay.toLocaleDateString('en-US', options));
  }, [currentDay]);

  const scrollCalendar = () => {
    const calendarElement = calendarRef.current;
    if (calendarElement) {
      const currentDayElement = calendarElement.querySelector('.current-day');
      if (currentDayElement) {
        const scrollLeft =
          currentDayElement.offsetLeft -
          (calendarElement.offsetWidth - currentDayElement.offsetWidth) / 2;
        calendarElement.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleNextDay = () => {
    const nextDay = new Date(currentDay);
    nextDay.setDate(currentDay.getDate() + 1);
    setCurrentDay(nextDay);
    scrollCalendar();
  };

  const handlePreviousDay = () => {
    const previousDay = new Date(currentDay);
    previousDay.setDate(currentDay.getDate() - 1);
    setCurrentDay(previousDay);
    scrollCalendar();
  };

  const renderDay = (day) => {
    const dayOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const isCurrentDay = day.toDateString() === currentDay.toDateString();

    return (
      <div
        key={day.toISOString()}
        className={`day ${isCurrentDay ? 'current-day' : ''}`}
      >
        <span>{day.toLocaleDateString(undefined, dayOptions)}</span>
      </div>
    );
  };

  const renderCalendar = () => {
    const days = [];
    const startDay = new Date(currentDay);
    startDay.setDate(currentDay.getDate() - 3);

    for (let i = 0; i < 7; i++) {
      const day = new Date(startDay);
      day.setDate(startDay.getDate() + i);
      days.push(renderDay(day));
    }

    return (
      <div className="calendar" ref={calendarRef}>
        {days}
      </div>
    );
  };

  return (
    <div>
      <div className="current-month">{currentMonth}</div>
      <div className="calendar-container">
        <button
          type="button"
          className="arrow left-arrow"
          onClick={handlePreviousDay}
        >
          &lt;
        </button>
        {renderCalendar()}
        <button
          type="button"
          className="arrow right-arrow"
          onClick={handleNextDay}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CalendarWidget;
