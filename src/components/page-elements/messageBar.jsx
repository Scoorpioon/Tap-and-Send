import React, {useRef, useState, useEffect, useReducer} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '../../styles/messageBar.css';

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
            <input type="file" name="sendFile" id="sendFile" />
            <label htmlFor="sendFile" className="sendFileButton" onClick={() => {console.log('Botão de imagem clicado!')}}><FontAwesomeIcon icon={faImage} /></label>
            <input type="text" ref={textoDigitado} placeholder={placeholder} onKeyDown={(evento) => {
                if(evento.key === 'Enter') {
                    enviarMensagem();
                };
            }} />
            <button onClick={enviarMensagem} className={`botaoDeEnvio ${mensagemVazia}`}><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
    );
};

export default BarraDeEnvio;