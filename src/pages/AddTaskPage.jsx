import React from 'react';
import AddTaskForm from '../components/AddTaskForm';
import { addTask } from '../services/api';

const AddTaskPage = ({ history }) => {
  const handleFormSubmit = (taskData) => {
    addTask(taskData)
      .then(() => history.push('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Add Task</h1>
      <AddTaskForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddTaskPage;
