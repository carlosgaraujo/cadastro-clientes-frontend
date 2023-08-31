import { UserContext } from "../../providers/userContext/userContext";
import { useContext } from "react";
import { StyledDiv } from "./style";
import { ModalEditProfile } from "../modalEditProfile";

export const Profile = () => {
    const { profile, setModalEditProfile, modalEditProfile } = useContext(UserContext);

    return (
        <StyledDiv>
            {modalEditProfile ? <ModalEditProfile /> : null}
            <h1>Olá</h1>
            <p>Seja bem-vindo</p>
            <p> </p>
            <p></p>
            <p></p>
            <button onClick={() => setModalEditProfile(true)}>editar Perfil</button>
        </StyledDiv>
    );
};
