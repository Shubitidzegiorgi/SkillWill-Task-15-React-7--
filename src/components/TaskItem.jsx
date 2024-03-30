import React from 'react';
import { Link } from 'react-router-dom';
import { deleteTask, updateTaskStatus } from '../services/api';

const TaskItem = ({ task }) => {
  const { id, task: taskText, completed } = task;

  const handleDelete = () => {
    deleteTask(id)
      .then(() => console.log('Task deleted'))
      .catch(error => console.error(error));
  };

  const handleStatusChange = () => {
    updateTaskStatus(id, { completed: !completed })
      .then(() => console.log('Task status updated'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <p>{taskText}</p>
      <p>Status: {completed ? 'Completed' : 'Incomplete'}</p>
      <button onClick={handleStatusChange}>Toggle Status</button>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
};

export default TaskItem;
