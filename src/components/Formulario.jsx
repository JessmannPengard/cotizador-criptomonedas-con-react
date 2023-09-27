import React from 'react'
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

    const [SelectFiat] = useSelectMonedas('Elige tu moneda FIAT', monedas);

    return (
        <form >
            <SelectFiat />

            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Formulario