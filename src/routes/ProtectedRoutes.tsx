import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../providers/userContext/userContext";

export const ProtectedRoutes = () => {
    const { loading } = useContext(UserContext);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return <Outlet />;
};
