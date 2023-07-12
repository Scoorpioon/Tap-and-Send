import React, {useRef, useState, useEffect, useReducer} from 'react';
import Mensagem from '../message';
import '../../styles/messageBar.css';
import dadosMensagem from '../../global/data';
import Variaveis from '../../global/variables';

const BarraDeEnvio = (props) => {
    const textoDigitado = useRef();
    const [mensagem, setarMensagem] = useState();
    const [mensagemVazia, ticarMensagemVazia] = useState();
    const [placeholder, mudarPlaceholder] = useState('Mensagem a ser enviada...');

    const enviarMensagem = () => {
        const texto = textoDigitado.current.value;
        
        if(!texto) {
            console.log('Mensagem vazia bloqueada.');

            ticarMensagemVazia('animacaoErro');
            mudarPlaceholder('Mensagem vazia não pode ser enviada...!');

            return false;
        } else {
            setarMensagem(texto);

            ticarMensagemVazia();
            mudarPlaceholder('Mensagem a ser enviada...')
        };

        props.onClick(mensagem);
        textoDigitado.current.value = '';
    };

    useEffect(() => {
        props.onClick(mensagem)
    }, [mensagem]);

    return(
        <div className="barraDeEnvio">
            <input type="text" ref={textoDigitado} placeholder={placeholder} onKeyDown={(evento) => {
                if(evento.key === 'Enter') {
                    enviarMensagem();
                };
            }} />
            <button onClick={enviarMensagem} className={`botaoDeEnvio ${mensagemVazia}`}>{'>'}</button>
        </div>
    );
};

export default BarraDeEnvio;
