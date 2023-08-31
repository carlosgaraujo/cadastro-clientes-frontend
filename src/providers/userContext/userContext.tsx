import { createContext, useState } from "react";
import { LoginData } from "../../pages/Login/validator";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
    TUserRequest,
    TUserResponse,
    TUserUpdate,
    UserProviderpros,
} from "./@types";

export const UserContext = createContext({});

export const UserProvider = ({ children }: UserProviderpros) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [modalEditProfile, setModalEditProfile] = useState(false);

    const [profile, setProfile] = useState<TUserResponse | null>(null);
    const [user, setUser] = useState<TUserResponse | null>(null);

    const signIn = async (data: LoginData) => {
        try {
            setLoading(true);
            const response = await api.post("/login", data);
            localStorage.setItem("token", response.data.token);
            navigate("/home");
            alert("login realizado com sucesso");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const userRegister = async (data: TUserRequest) => {
        try {
            await api.post<TUserResponse>("users", data);
            alert(`Usuario cadastrado com sucesso `);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const userUpdate = async (data: TUserUpdate) => {
        try {
            const token = localStorage.getItem("token");
            const response = await api.patch(`/profile/`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert(`Perfil atualizado`);
            userloged();
            setModalEditProfile(false);
        } catch (error) {
            console.log(error);
        }
    };

    const userDelete = async (id: number | undefined) => {
        try {
            const token = localStorage.getItem("token");

            await api.delete(`/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert(`perfil deletado`);
            setModalEditProfile(false);
            logout();
        } catch (error) {
            console.log(error);
        }
    };

    const userloged = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get(`/profile/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfile(response.data);
            console.log(user, "profile logado");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <UserContext.Provider
            value={{
                signIn,
                logout,
                userRegister,
                loading,
                setProfile,
                profile,
                modalEditProfile,
                setModalEditProfile,
                userUpdate,
                userDelete,
                userloged,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
