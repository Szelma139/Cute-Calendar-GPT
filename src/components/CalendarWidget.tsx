/* eslint-disable tailwindcss/no-custom-classname */
import './CalendarWidget.module.css';

import React, { useState } from 'react';

const BASE64_ENCODED_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAJUlEQVR42mNgAILy8vL/DLgASBKnApgkVgXIkhgKiNKJ005s4gDLbCZBiSxfygAAAABJRU5ErkJggg==';
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDayClassName = (day) => {
    const dayOfWeek = day.getDay();
    if (dayOfWeek === 0)
      return `day sunday${
        day.toDateString() === currentDate.toDateString() ? ' current-day' : ''
      }`;
    if (dayOfWeek === 6)
      return `day saturday${
        day.toDateString() === currentDate.toDateString() ? ' current-day' : ''
      }`;
    if (day.toDateString() === currentDate.toDateString())
      return 'day current-day';
    return 'day';
  };

  const scrollCalendar = () => {
    const calendarElement = document.getElementById('calendar');
    if (calendarElement) {
      const currentDayElement = calendarElement.querySelector('.current-day');
      if (currentDayElement) {
        const scrollLeft =
          currentDayElement.offsetLeft -
          (calendarElement.offsetWidth - currentDayElement.offsetWidth) / 2;

        calendarElement.scrollLeft = scrollLeft;
      }
    }
  };

  const handlePrevDay = () => {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setCurrentDate(prevDay);
    scrollCalendar();
  };

  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCurrentDate(nextDay);
    scrollCalendar();
  };

  const renderDays = () => {
    const days = [];

    for (let i = -3; i <= 3; i++) {
      const day = new Date(currentDate);
      day.setDate(day.getDate() + i);

      const className = getDayClassName(day);
      const dayOfWeek = daysOfWeek[day.getDay()];
      const visible = i === 0;

      days.push(
        <div className={className} key={day}>
          {visible && <div className="arrow-down" />}
          {day.getDate()}
          <span className="day-of-week">{dayOfWeek}</span>
        </div>
      );
    }

    return days;
  };

  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

  return (
    <div className="calendar-container">
      <div className="arrow left-arrow" onClick={handlePrevDay} />
      <div id="calendar" className="calendar">
        {renderDays()}
      </div>
      <div className="arrow right-arrow" onClick={handleNextDay} />
      <div className="current-month">{currentMonth}</div>
    </div>
  );
};

export default CalendarWidget;
