import React from 'react';

const Task = ({ title, time }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{formatTime(time)}</div>
    </div>
  );
};

const formatTime = (time) => {
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

export default Task;
