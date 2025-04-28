import "./theme-changer.css";
import { useState, useEffect, act } from "react";


export default function ThemeToggle({action}) {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button 
            onClick={() => {action(); toggleDarkMode();}} 
            className="theme-toggle-btn" 
            aria-label="Toggle Theme"
        >
            {darkMode ? (
                <svg className="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3a9 9 0 0 0 0 18c4.97 0 9-4.03 9-9 0-4.97-4.03-9-9-9zm0 16a7 7 0 0 1 0-14v14z" />
                </svg>
            ) : (
                <svg className="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.03 1.21l1.8-1.79-1.41-1.41-1.79 1.8 1.4 1.4zM20 13h3v-2h-3v2zm-9 9h2v-3h-2v3zm4.24-2.24l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM4.22 19.78l1.79-1.8-1.41-1.41-1.79 1.8 1.41 1.41zM12 6a6 6 0 0 0 0 12 6 6 0 0 0 0-12z" />
                </svg>
            )}
        </button>
    );
}