import {useState, useEffect} from 'react';
import '../styles/messageContainer.css';

const estilizarHora = {
    position: 'relative',
    fontSize: '.7em',
    fontWeight: 'bold',
    marginLeft: '12px',
    top: '5px'
}

// {texto, tipo, hora}
const Mensagem = (props) => {
    const [mensagemInvalida, alterarValidez] = useState(false);

    useEffect(() => {if(!props.tipo) {
        alterarValidez(true);
    } else {
        alterarValidez(false);
    }});

    return(
        <div style={mensagemInvalida ? {display: 'none'} : null} className={`linhaMensagem ${props.tipo === 'author' ? 'ladoDireito' : 'ladoEsquerdo'} ultimaMensagem`}>
                <span className={`message ${props.tipo}`}>{props.texto} <span style={estilizarHora}>{props.hora}</span></span>
        </div>
    );
};

export default Mensagem;
