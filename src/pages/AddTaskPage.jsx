import React from 'react';
import AddTaskForm from '../components/AddTaskForm';
import { addTask } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const AddTaskPage = ({ history }) => {
  const { language } = useLanguage();
  const { addTask: addTaskText } = translations[language];

  const handleFormSubmit = (taskData) => {
    addTask(taskData)
      .then(() => history.push('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>{addTaskText}</h1>
      <AddTaskForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddTaskPage;
