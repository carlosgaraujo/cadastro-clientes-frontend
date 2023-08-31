import { styled } from "styled-components";

export const DivModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;

`;

export const FormContent = styled.form`
    margin-top: 10px;
    width: 520px;
    height: 700px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px 10px;

    div {
        display: flex;
        justify-content: space-between;
        margin: 5px;
    }

    .close {
        border-radius: 100%;
        width: 25px;
        height: 25px;
    }
    h2 {
        font-family: var();
    }
    label {
    }

    input {
        padding: 10px;
        height: 48px;
        border: 2px solid gray;
    }

    .modal-buttons > button {
        width: 150px;
        height: 48px;
        border-radius: 4px;
        padding: 12px, 28px, 12px, 28px;
        font-family: "Inter", sans-serif;
    }

`;
