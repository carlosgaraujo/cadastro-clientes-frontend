import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface AuthProviderpros {
    children: ReactNode;
}

interface AuthContextValues {
    signIn: (data: LoginData) => void;
    loading: boolean;
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderpros) => {
    const [loading, setloading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("lista-contatos:token");
        if (!token) {
            setloading(false);
            return;
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setloading(false);
    }, []);

    const signIn = async (data: LoginData) => {
        try {
            const response = await api.post("/login", data);
            console.log(response)
            const { token } = response.data;
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            localStorage.setItem("lista-contatos:token", token);
            setloading(false);

            navigate("home");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AuthContext.Provider value={{ signIn, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
