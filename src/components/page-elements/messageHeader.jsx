import React from 'react';
import BarraDePesquisa from '../searchBar';
import '../../styles/messageHeader.css';

const CabecalhoMensagem = ({nomeContato}) => {
    return(
    <header className="_cabecalho-mensagens">
        <div className="info">
            <h4>{nomeContato}</h4>
            <span className="lastSeen">Último acesso em 00:00...</span>
        </div>

        <div className="lateral">
            <BarraDePesquisa Placeholder="Pesquisar por mensagens..." tipo="Click" />
        </div>
    </header>
    )
};

export default CabecalhoMensagem;