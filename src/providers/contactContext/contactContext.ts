import { createContext, useContext, useState } from "react";
import {
    ContactProviderpros,
    TContact,
    TContactRequest,
    TContactUpdateRequest,
} from "./@types";
import { UserContext } from "../userContext/userContext";
import { api } from "../../services/api";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }: ContactProviderpros) => {
    
    const [contact, setContact] = useState<TContact>();


    const { userloged } = useContext(UserContext);

    let token = localStorage.getItem("KNZ-Schedule-Token");

    async function createContact(formData: TContactRequest) {
        try {
            await api.post<TContact>("contact", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert(`Contato cadastrado com sucesso `);
            userloged();
        } catch (error) {}
    }

    async function updateContact(
        id: number | undefined,
        formData: TContactUpdateRequest
    ) {
        try {
            await api.patch<TContact>(
                `contact/${id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            userloged();
            alert(`Contato atualizado com sucesso `);
        } catch (error) {}
    }

    async function deleteContact(id: number | undefined) {
        try {
            await api.delete(`contact/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            userloged();
            alert(`Contato deletado com sucesso`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ContactContext.Provider
            value={{
                contact,
                setContact,
                createContact,
                updateContact,
                deleteContact,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};
