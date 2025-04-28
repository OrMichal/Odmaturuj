import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import { AppRoutes } from './AppRoutes';
import Navbar from './components/navbar/navbar';
import { useEffect, useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Ujistíme se, že při změně darkMode přepneme třídu na body a uložíme stav do localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
    console.log("rendered");
  }, [darkMode]);

  const NavbarData = [
    { name: "Domů", path: "/home" },
    { name: "O aplikaci", path: "/about" },
    { name: "Znalosti", path: "/knowledge" }
  ];

  return (
    <Router>
      <Navbar data={NavbarData} themeAction={() => setDarkMode(!darkMode)} />
      <Routes>{AppRoutes}</Routes>
    </Router>
  );
}
