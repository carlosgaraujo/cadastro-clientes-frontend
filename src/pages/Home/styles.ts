import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
`;

export const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
    align-content: flex-start;
    li {
        width: 300px;
        height: 120px;
        /* border: 1px solid black; */
        list-style: none;
        padding: 10px;
    }
    span {
        font-weight: 900;
        line-height: 1.5;
    }
`;
