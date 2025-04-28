import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import KnowledgeView from "./components/Practice/PracticeView";

export const AppRoutes = (
    <Route>
        <Route path="/home" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<KnowledgeView />}/>
    </Route>
);