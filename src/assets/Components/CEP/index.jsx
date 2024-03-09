import { Container } from "./style";

export const Cep = ({result}) =>{
    return(

        
        <Container>

                <h3 className="cep-number">{result?.cep}</h3>
            
            <div>
                <p className="info-cep">Logradouro: {result?.logradouro}</p>
                <p className="info-cep">Bairro: {result?.bairro}</p>
                <p className="info-cep">Cidade: {result?.localidade}</p>
                <p className="info-cep">UF: {result?.uf}</p>
                <p className="info-cep">IBGE: {result?.ibge}</p>
                <p className="info-cep">DDD: {result?.ddd}</p>
            </div>

        </Container>

        
    )
}