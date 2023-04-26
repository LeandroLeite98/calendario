import React from 'react';

function Topbar({ selectedDate, onAddTaskClick }) {
  const formattedDate = selectedDate.toLocaleDateString();

  return (
    <div className="topbar">
      <div className="date">{formattedDate}</div>
      <button onClick={onAddTaskClick}>Adicionar Tarefa</button>
    </div>
  );
}

export default Topbar;
