import styled from "styled-components";

export const Container = styled.div`
    height: 370px;
    width: 350px;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 20px;

    .cep-number{
        text-align: center;
        background-color: #3b8cde;
        margin-top: 0;
        border-radius: 10px 10px 0 0;
        padding: 10px 0 10px 0;
        color: #fff;
    }

    .info-cep{
        padding-left: 20px;
    }
`