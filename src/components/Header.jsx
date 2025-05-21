import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <header className="header">
            <h1>CampusCanteen</h1>
            <button className="theme-toggle" onClick={() => setDarkMode(prev => !prev)}>
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </header>
    );
};

export default Header;
