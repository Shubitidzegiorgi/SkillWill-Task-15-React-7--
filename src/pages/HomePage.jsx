import React, { useState, useEffect } from 'react';
import TaskItem from '../components/TaskItem';
import { getAllTasks } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const HomePage = () => {
  const [taskList, setTaskList] = useState([]);
  const { language } = useLanguage();
  const { todoList } = translations[language];

  useEffect(() => {
    getAllTasks()
      .then(data => setTaskList(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>{todoList}</h1>
      {taskList.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default HomePage;
