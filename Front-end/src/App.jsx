import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import { AppRoutes } from './AppRoutes';

export default function App() {

  return (
    <Router>
      <nav>
        <Link to={"/about"}>O aplikaci</Link>
        <Link to={"/home"}>Domů</Link>
      </nav>
      <Outlet />
      <Routes>{AppRoutes}</Routes>
    </Router>
  );
}
