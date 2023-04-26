import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ date, time, duration });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />
      <input
        type="text"
        value={duration}
        onChange={(event) => setDuration(event.target.value)}
        placeholder="Duração"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
