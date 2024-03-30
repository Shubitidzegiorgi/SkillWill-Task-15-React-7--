import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <Header/>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/add" element={AddTaskPage} />
          <Route path="/edit/:id" element={EditTaskPage} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
};

export default App;
