import styled from "styled-components";

export const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    li {
        width: max-content;
        border: 1px solid black;
        list-style: none;
        padding: 20px;
    }
`;
