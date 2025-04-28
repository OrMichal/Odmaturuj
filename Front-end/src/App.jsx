import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import { AppRoutes } from './AppRoutes';
import MainNavbar from './components/main-navbar/main-navbar';
import { useEffect, useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  }, [darkMode]);

  const NavbarData = [
    { name: "Domů", path: "/home" },
    { name: "O aplikaci", path: "/about" },
    { name: "Procvičování", path: "/practice" }
  ];

  return (
    <Router>
      <MainNavbar data={NavbarData} themeAction={() => setDarkMode(!darkMode)} />
      <Routes>{AppRoutes}</Routes>
    </Router>
  );
}
