import React, { useState, useEffect } from 'react';
import TaskItem from '../components/TaskItem';
import { getAllTasks } from '../services/api';

const HomePage = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getAllTasks()
      .then(data => setTaskList(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {taskList.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default HomePage;
