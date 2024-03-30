import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditTaskForm from '../components/EditTaskForm';
import { getTaskById, editTask } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const EditTaskPage = ({ history }) => {
  const { id } = useParams(); 
  const [taskData, setTaskData] = useState({});
  const { language } = useLanguage();
  const { editTask: editTaskText } = translations[language];

  useEffect(() => {
    getTaskById(id)
      .then(data => setTaskData(data))
      .catch(error => console.error(error));
  }, [id]);

  const handleFormSubmit = (updatedTaskData) => {
    editTask(id, updatedTaskData)
      .then(() => history.push('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>{editTaskText}</h1>
      <EditTaskForm initialData={taskData} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default EditTaskPage;
