import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;

    h2{
        font-size: 30px;
    }

    a{
        text-decoration: none;
        color: #000;
    }

    .icons{
        display: flex;
        align-items: center;
    }

    .bi{
        cursor: pointer;
        margin-right: 40px;
        font-size: 40px;
    }

    @media screen and (max-width: 420px) {
        .bi{
            font-size: 30px;
            margin-right: 15px;
        }
    }
`