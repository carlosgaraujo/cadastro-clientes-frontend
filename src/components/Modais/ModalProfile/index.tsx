import { useContext } from "react";
import { api } from "../../../services/api";
import { UserContext } from "../../../providers/userContext/userContext";

export const Index = () => {
    const { setProfile } = useContext(UserContext);

    const editProfile = async (data) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const id = localStorage.getItem("@id");
            const response = await api.put(`/users${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfile(response.data);
            alert("Perfil alterado");
        } catch (error) {
            console.log(error);
        }
    };
    return <div>index</div>;
};
