import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { StyledUl } from "./styles";

export interface Contact {
    id: string;
    nomeCompleto: string;
    email: string;
    telefone: string;
    dataRegistro: string;
}

export const Home = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        (async () => {
            const response = await api.get<Contact[]>("/contacts");
            setContacts(response.data);
        })();
    }, []);

    return (
        <>
            <p>Home</p>
            <StyledUl>
                {contacts.map((cont) => (
                    <li key={cont.id}>
                        <p>Nome Completo: {cont.nomeCompleto}</p>
                        <p>Email: {cont.email}</p>
                        <p>telefone: {cont.telefone}</p>
                    </li>
                ))}
            </StyledUl>
        </>
    );
};
