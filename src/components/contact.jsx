import {useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import GPopup from './page-elements/generalPopup';
import '../styles/contactBar.css';

const Contato = ({nome, texto, id}) => {
    const {ContatoAtual, idAtual} = useSelector(rootReducer => rootReducer.contactReducer);
    const dispatch = useDispatch();

    const selecionarContato = () => {
        dispatch({
            type: 'contato/alterar',
            payload: `Contato${id}`,
            Id: id,
            infoContatoAtual: {
                id: id,
                nome: nome,
                texto: texto
            }
        });
    };

    const editarContato = () => {
        console.log('Edição requisitada');
    };

    return(
        <div className={`_contato`} onClick={selecionarContato}>
            <div className="_info-contato">
                <span className="foto-contato center"><FontAwesomeIcon icon={faUser} /></span>
                <div className="textos-contato">
                    <span className="nome-contato">{nome}</span>
                    <span className="mensagem-contato">{texto}</span>
                </div>
            </div>
            <div className="_editar-contato center" onClick={editarContato}>
                <FontAwesomeIcon icon={faGear} />
            </div>
        </div>
    );
};

export default Contato;