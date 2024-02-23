import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2>Saved Tasks</h2>
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <div>Title: {task.title}</div>
          <div>Description: {task.description}</div>
          <div>Time Tracked: {formatTime(task.time)}</div>
        </div>
      ))}
    </div>
  );
};

const formatTime = (time) => {
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

export default TaskList;
