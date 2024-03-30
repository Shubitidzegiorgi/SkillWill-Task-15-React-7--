import React, { useState, useEffect } from 'react';

const EditTaskForm = ({ initialData, onSubmit }) => {
  const [taskData, setTaskData] = useState(initialData);

  useEffect(() => {
    setTaskData(initialData);
  }, [initialData]);

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
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditTaskForm;
