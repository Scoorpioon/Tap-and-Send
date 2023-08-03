import React from 'react';
import '../../styles/messageHeader.css';

const CabecalhoMensagem = ({nomeContato}) => {
    return(
    <div className="_cabecalho-mensagens">
        <h4>{nomeContato}</h4>
        <span className="lastSeen">Último acesso em 00:00...</span>
    </div>
    )
};

export default CabecalhoMensagem;