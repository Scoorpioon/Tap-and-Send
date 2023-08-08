import React, {useEffect, useContext} from 'react';
import {DadosDeMensagens} from '../global/mainData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear } from '@fortawesome/free-solid-svg-icons'
import '../styles/contactBar.css';
import '../styles/icons.css';

const Contato = ({nome, texto, id}) => {
    const {contatoAtual, mudarContato} = useContext(DadosDeMensagens);

    const selecionarContato = () => {
        mudarContato(`Contato${id}`);
    };

    const editarContato = () => {
        console.log('Edição requisitada');
    };

    useEffect(() => {
        console.log('Contato selecionado: ', contatoAtual);
    }, [contatoAtual]);

    return(
        <div className={`_contato`} onClick={selecionarContato}>
            <div className="_info-contato">
                <span className="foto-contato center"><FontAwesomeIcon icon={faUser} /></span>
                <div className="textos-contato">
                    <span className="nome-contato">{nome}</span>
                    <span className="mensagem-contato">{texto}</span>
                </div>
            </div>
            <div className="_editar-contato center" onClick={editarContato}><FontAwesomeIcon icon={faGear} /></div>
        </div>
    );
};

export default Contato;