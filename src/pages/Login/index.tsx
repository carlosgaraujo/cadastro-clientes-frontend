import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const { signIn, userloged } = useContext(UserContext);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    
    useEffect(() => {
        if (token) {
            navigate("/");
            alert("Você já esta logado em nosso sistema !!");
            userloged();
        }
    }, []);

    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    const login = (data: LoginData) => {
        signIn(data);
    };

    return (
        <main>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(login)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    {...register("password")}
                />

                <button type="submit">Entrar</button>
            </form>
        </main>
    );
};
