import { Container } from "./style"
import { Cep } from "../CEP"
import { api } from "../../api/api"

import { useEffect, useState } from "react";

import Lupa from '../../lupa.png'
import { useRef } from "react"

export const ZipCodeInput = () => {

    const buttonRef = useRef(null)
    const inputRef = useRef(null)
    const [cepData, setCepData] = useState(undefined);


    async function handleSearch() {
        try {
            const response = await api.get(`${inputRef.current.value}/json`);
            setCepData(response.data);
            inputRef.current.value = "";
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
            setCepData(null);
            inputRef.current.value = "";

        }
    }

    return (
        <Container>
            <h3>Encontre seu CEP por aqui!</h3>
            <div className="input-area">
                <input ref={inputRef} className="input-cep" type="number" name="" id="" placeholder="Informe o CEP aqui:" />
                <button ref={buttonRef} onClick={handleSearch} className="search-button"><img className="lupa" src={Lupa} alt="" /></button>
            </div>

            {cepData === null && (
                <p className="error-text">CEP não encontrado ou erro de digitação! <br />Siga este exemplo: 36050140</p>
            )}

            {cepData && <Cep result={cepData} />}

            <div className="map-area">
                <h2>MAPA</h2>
                <iframe
                    title='Mapa'
                    src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBpUupMGNXDirVekwjLkuQfQHaIstLwbjE
              &q=${cepData?.cep}`}
                    height="230"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    className="maps"
                />
            </div>
        </Container>
    )
}