import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 0 0;

    .input-area{
        display: flex;
        align-items: center;
    }

    .input-cep[type=number]::-webkit-inner-spin-button,
    .input-cep[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
    
    .input-cep{
        border-radius: 5px;
        width: 20rem;
        height: 2rem;
        padding-left: 5px;
        font-size: 20px;
    }

    .search-button{
        cursor: pointer;
        margin-left: 10px;
        height: 2.5rem;
        border: none;
        background-color: #3b8cde;
        border-radius: 50%;

        &:hover{
            filter: brightness(0.8)
        }

        &:active{
            filter: brightness(0.6)
        }
    }

    .lupa{
        width: 30px;
        display: flex;
        
    }

    .error-text{
        text-align: center;
    }

    .map-area{
        width: 100%;
        height: 400px;
        margin-top: 50px;
        background-color: #3b8cde;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2{
        color: #fff;
    }

    .maps{
        width: 700px;
    }

    @media screen and (max-width: 720px) {
         .input-cep{
            width: 15rem;
        }

        .maps{
            width: 320px;
        }
    }

`