import { Route, Routes } from "react-router-dom";

export const AppRoutes = (
    <Route>
        <Route path="/home" index element={<div>home</div>} />
        <Route path="/about" element={<div>o apce</div>} />
    </Route>
);