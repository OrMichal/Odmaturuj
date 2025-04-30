import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import KnowledgeView from "./components/Practice/PracticeView";
import WelcomeComponent from "./components/welcome-view/welcome-component";

export const AppRoutes = (
    <Route>
        <Route path="/" element={<WelcomeComponent />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<KnowledgeView />}/>
    </Route>
);