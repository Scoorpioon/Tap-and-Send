import React, {useEffect, useRef} from 'react';
import BarraDePesquisa from '../../searchBar';
import { useSelector, useDispatch } from 'react-redux';
import '../../../styles/messageHeader.css';

const CabecalhoMensagem = ({nomeContato}) => {
    const { usuarioAtual } = useSelector(rootReducer => rootReducer.userReducer);
    const mensagemBuscada = useRef();

    /* useEffect(() => {console.log('Redux user:', usuarioAtual)}); // Printar usuário no Redux */

    return(
    <header className="_cabecalho-mensagens">
        <div className="info">
            <h4>{nomeContato}</h4>
            <span className="lastSeen">Último acesso em 00:00...</span>
        </div>

        <div className="lateral">
            <BarraDePesquisa identificacao="pesquisaDeMensagem" 
             Placeholder="Pesquisar por mensagens..." tipo="Click" />
        </div>
    </header>
    );
};

export default CabecalhoMensagem;
