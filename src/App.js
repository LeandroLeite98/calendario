import React, { useState } from 'react';
import MyCalendar from './components/mycalendar';
import Topbar from './components/topbar';
import TimeTable from './components/timetable';
import TaskForm from './components/taskform';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddTaskClick = () => {
    setShowTaskForm(true);
  };

  const handleTaskFormSubmit = (task) => {
    const { date, time, duration } = task;
    const taskDate = new Date(`${date} ${time}`);
    const newTask = {
      ...task,
      date: taskDate,
    };
    setTasks([...tasks, newTask]);
    setShowTaskForm(false);
  };

  const getTasksForDate = (date) => {
    return tasks.filter((task) => {
      const taskDate = new Date(task.date);
      return (
        taskDate.getDate() === date.getDate() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getFullYear() === date.getFullYear()
      );
    });
  };

  return (
    <div>
      <MyCalendar onChange={handleDateChange} value={selectedDate} />
      <div className="content">
        <Topbar
          selectedDate={selectedDate}
          onAddTaskClick={handleAddTaskClick}
        />
        <TimeTable>
          {new Array(24).fill(0).map((_, index) => {
            const time = `${index}:00`;
            const tasksForTime = getTasksForDate(new Date(`${selectedDate.toDateString()} ${time}`));

            return (
              <tr key={time}>
                <td>{time}</td>
                <td>
                  {tasksForTime.map((task) => (
                    <div key={task.id}>
                      {task.title} ({task.duration})
                    </div>
                  ))}
                </td>
              </tr>
            );
          })}
        </TimeTable>
      </div>
      {showTaskForm && (
        <div className="task-form-container">
          <TaskForm onSubmit={handleTaskFormSubmit} />
        </div>
      )}
    </div>
  );
}

export default App;
