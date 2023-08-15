import {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';
import '../styles/searchBar.css';

const BarraDePesquisa = ({Placeholder, tipo, identificacao}) => {
    const [barraVisivel, alterarVisibilidade] = useState();
    const mensagemBuscada = useRef();
    const dispatch = useDispatch();

    const aparecerBarra = () => {
        return barraVisivel ? alterarVisibilidade(false) : alterarVisibilidade(true);
    };

    const dadosPesquisa = () => {
        dispatch({
            type: 'pesquisa/atualizar',
            nomeBarra: mensagemBuscada.current.id,
            dadosPesquisa: mensagemBuscada.current.value
        });
    };

    return(
        <>
            {tipo === 'Barra' || barraVisivel ? <input type="text" onChange={dadosPesquisa} id={identificacao} className="searchBar" 
            placeholder={Placeholder} ref={mensagemBuscada} /> : null}
            {tipo === 'Click' ? <button className={`lupa`} onClick={aparecerBarra}>{!barraVisivel ? <FontAwesomeIcon icon={faMagnifyingGlass} /> 
            : <FontAwesomeIcon icon={faXmark} />}</button> : null}
        </>
    );
};

export default BarraDePesquisa;
