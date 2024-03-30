import React, { useState } from 'react';

const AddTaskForm = ({ onSubmit }) => {
  const [taskData, setTaskData] = useState({
    task: '',
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="task" value={taskData.task} onChange={handleChange} placeholder="Enter Task" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
