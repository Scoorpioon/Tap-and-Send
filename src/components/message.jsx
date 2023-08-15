import {useEffect, useState} from 'react';
import '../styles/messageContainer.css';

const estilizarHora = {
    position: 'relative',
    fontSize: '.7em',
    fontWeight: 'bold',
    marginLeft: '12px',
    top: '5px'
}

const Mensagem = ({texto, tipo, hora}) => {
    /* const [horaAtual, mudarHora] = useState();

    useEffect(() => {
        mudarHora(new Date());
        console.log(hora);
    }); */

    return(
        <div className={`linhaMensagem ${tipo === 'author' ? 'ladoDireito' : 'ladoEsquerdo'}`}>
                <span className={`message ${tipo}`}>{texto} <span style={estilizarHora}>{hora}</span></span>
        </div>
    );
};

export default Mensagem;
