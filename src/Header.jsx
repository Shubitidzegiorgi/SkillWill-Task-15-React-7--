import React from 'react';
import { useLanguage } from './contexts/LanguageContext';
import translations from './translations';

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const { headerTitle, english, georgian } = translations[language];

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <header>
      <h1>{headerTitle}</h1>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">{english}</option>
        <option value="ge">{georgian}</option>
      </select>
    </header>
  );
};

export default Header;
