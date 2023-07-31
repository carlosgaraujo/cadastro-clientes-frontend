import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    );
};
