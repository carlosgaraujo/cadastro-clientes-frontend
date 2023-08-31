import { MainContainer, StyledUl } from "./styles";
import { useEffect } from "react";
import { Profile } from "../../components/Profile";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { useNavigate } from "react-router-dom";



export const Home = () => {
    const navigate = useNavigate();

    const { userloged } = useContext(UserContext);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
          navigate("/login");
          alert("Você deve estar logado para acessar essa página !!");
        } else {
          userloged();
        }
      }, []);

    return (
        <MainContainer>
            <Profile />
            <StyledUl>
                {/* map aqui */}
            </StyledUl>
        </MainContainer>
    );
};
