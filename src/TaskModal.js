import React from 'react';
import './App.css';

const TaskModal = ({ closeModal, taskTitle, setTaskTitle, taskDescription, setTaskDescription, saveTask }) => {
  const handleSaveTask = () => {
    saveTask();
    closeModal();
  };

  return (
    
    <div className="modal-container">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Title"
          className="modal-input"
        />
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Description"
          className="modal-input"
        />
        <div className="button-container">
          <button onClick={handleSaveTask} className="save-button">Save</button>
          <button onClick={closeModal} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
