import { SubmitErrorHandler, useForm } from "react-hook-form";
import { DivModal, FormContent } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { TEditProfile, schemaEditProfile } from "./validator";
import { UserContext } from "../../providers/userContext/userContext";
import { useContext } from "react";
import {
    TUserRequest,
    TUserRequestEdit,
} from "../../providers/userContext/@types";

export const ModalEditProfile = () => {
    const { userUpdate, userDelete } = useContext(UserContext);
    const { profile, setModalEditProfile } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TEditProfile>({
        resolver: zodResolver(schemaEditProfile),
    });

    // console.log(profile);

    const closeModal = () => {
        setModalEditProfile(false);
    };

    const handleSaveChanges = (data: TUserRequest) => {
        userUpdate(data);
        console.log("gggggg");
        console.log(data);
    };

    const handleDeleteProfile = () => {
        userDelete(profile.id);
    };

    return (
        <DivModal>
            <div className="div__container">
                <FormContent className="media">
                    <div>
                        <h2>Editar Perfil</h2>
                        <button
                            className="close"
                            onClick={() => setModalEditProfile(false)}
                        >
                            X
                        </button>
                    </div>

                    <label htmlFor="nomeCompleto">Nome</label>
                    <input
                        id="nomeCompleto"
                        type="text"
                        placeholder="Nome"
                        {...register("nomeCompleto")}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        className="text-style-inputs-buttons-input-placeholder"
                        id="email"
                        type="email"
                        placeholder="exemple@exemple.com.br"
                        {...register("email")}
                    />
                    <p className="error">{errors.email?.message}</p>
                    <label
                        htmlFor="telefone"
                    >
                        Celular
                    </label>
                    <input
                        id="telefone"
                        type="tel"
                        placeholder="(024) 99999-9999"
                        {...register("telefone")}
                    />
                    <div className="modal-buttons">
                        <button
                            className="cancel"
                            type="submit"
                            onClick={closeModal}
                        >
                            Cancelar
                        </button>
                        <button
                            className="delete"
                            type="submit"
                            onClick={handleSubmit(handleDeleteProfile)}
                        >
                            Excluir Perfil
                        </button>
                        <button
                            className="save"
                            type="submit"
                            onSubmit={handleSubmit(handleSaveChanges)}
                        >
                            Salvar Alterações
                        </button>
                    </div>
                </FormContent>
            </div>
        </DivModal>
    );
};
