import React from 'react';

function TimeTable() {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Horas</th>
          <th>Atividades</th>
        </tr>
      </thead>
      <tbody>
        {hours.map((hour) => (
          <tr key={hour}>
            <td>{hour}:00</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TimeTable;
