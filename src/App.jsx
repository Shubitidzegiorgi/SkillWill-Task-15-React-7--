import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/v1/todo');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    try {
      const response = await fetch('/api/v1/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        body: JSON.stringify({
          name: newTaskName,
          isCompleted: false,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      const data = await response.json();
      setTasks([...tasks, data]);
      setNewTaskName('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTaskStatus = async (taskId, isCompleted) => {
    try {
      const response = await fetch(`/api/v1/todo/${taskId}?isCompleted=${!isCompleted}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Failed to update task status');
      }
      const updatedTasks = tasks.map(task =>
        task._id === taskId ? { ...task, isCompleted: !isCompleted } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleInputChange = event => {
    setNewTaskName(event.target.value);
  };

  return (
    <div>
      <h1>TODO App</h1>
      <input
        type="text"
        value={newTaskName}
        onChange={handleInputChange}
        placeholder="Enter task name"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTaskStatus(task._id, task.isCompleted)}
            />
            <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
              {task.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
