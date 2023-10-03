import { React, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover{
        cursor: pointer;
        background-color: #7A7DFE;
    }    
`

const Formulario = () => {

    const [criptos, setCriptos] = useState([]);
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda FIAT', monedas);
    const [criptomoneda, SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda', criptos);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const listadoCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            });

            setCriptos(listadoCriptos);

        }
        consultarAPI();
    }, []);

    return (
        <form >
            <SelectMonedas />

            <SelectCriptomonedas />

            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Formulario