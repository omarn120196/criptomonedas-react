import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../Hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
    background: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    margin-top: 30px;

    &:hover{
        background: #5d60ff;
    }
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu criptomoneda', criptos);

    useEffect(()=>{
        const consultarApi = async ()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            const arrayCryptos = resultado.Data.map(cripto =>{
                
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                
                return objeto;
            });

            setCriptos(arrayCryptos);
        }

        consultarApi();
    }, []);

    const handleSubmit = e=>{
        e.preventDefault();
        
        if([moneda, criptomoneda].includes('')){
            setError(true);
            return;
        }

        setError(false);
        setMonedas({moneda, criptomoneda});
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}

            <form 
                action=""
                onSubmit={handleSubmit}
            >
                <SelectMonedas/>
                <SelectCriptomoneda/>

                <InputSubmit 
                    type="submit" 
                    value="Cotizar" 
                />
            </form>
        </>
    )
}

export default Formulario