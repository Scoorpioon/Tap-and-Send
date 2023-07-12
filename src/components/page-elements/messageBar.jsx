import React, {useRef, useState, useEffect, useReducer} from 'react';
import Mensagem from '../message';
import '../../styles/messageContainer.css';
import dadosMensagem from '../../global/data';
import Variaveis from '../../global/variables';

const BarraDeEnvio = (props) => {
    const textoDigitado = useRef();
    const [mensagem, setarMensagem] = useState()

    const enviarMensagem = () => {
        const texto = textoDigitado.current.value;
        
        if(!texto) {
            console.log('Mensagem vazia não pode ser enviada...!');
            return false;
        } else {
            setarMensagem(texto);
        };

        props.onClick(mensagem);
        textoDigitado.current.value = '';
    };

    useEffect(() => {
        props.onClick(mensagem)
    }, [mensagem]);

    return(
        <div className="barraDeEnvio">
            <input type="text" ref={textoDigitado} placeholder="Mensagem a ser enviada..." onKeyDown={(evento) => {
                if(evento.key === 'Enter') {
                    enviarMensagem();
                };
            }} />
            <button onClick={enviarMensagem}>{'>'}</button>
        </div>
    );
};

export default BarraDeEnvio;