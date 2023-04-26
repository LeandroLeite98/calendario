import React, { useState } from 'react';
import Calendar from 'react-calendar';

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  

  return (
    <div className="sidebar">
      <Calendar onChange={handleDateChange} value={selectedDate} />
    </div>
  );
}

export default MyCalendar;
