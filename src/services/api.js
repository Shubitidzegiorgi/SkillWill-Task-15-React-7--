const API_URL = '/api/v1/todo';
const API_KEY = 'v3lH_fXsC_57bMNst4WK-GHQpMqHe47dmq3Op-CpHZg2mU0TNg';

export const getAllTasks = async () => {
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    }
  });
  const data = await response.json();
  return data;
};

export const getTaskById = async (taskId) => {
  const response = await fetch(`${API_URL}/${taskId}`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    }
  });
  const data = await response.json();
  return data;
};

export const addTask = async (taskData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(taskData),
  });
  const data = await response.json();
  return data;
};

export const editTask = async (taskId, updatedTaskData) => {
  const response = await fetch(`${API_URL}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(updatedTaskData),
  });
  const data = await response.json();
  return data;
};

export const deleteTask = async (taskId) => {
  const response = await fetch(`${API_URL}/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    }
  });
  const data = await response.json();
  return data;
};

export const updateTaskStatus = async (taskId, statusData) => {
  const response = await fetch(`${API_URL}/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(statusData),
  });
  const data = await response.json();
  return data;
};
