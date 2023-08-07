import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';
import '../styles/searchBar.css';

const BarraDePesquisa = ({Placeholder, tipo, botao}) => {
    const [barraVisivel, alterarVisibilidade] = useState();

    const aparecerBarra = () => {
        return barraVisivel ? alterarVisibilidade(false) : alterarVisibilidade(true);
    }

    return(
        <>
            {tipo === 'Barra' || barraVisivel ? <input type="text" className="searchBar" placeholder={Placeholder} onAnimationStart={(e) => {console.log('Animação!')}} /> : null}
            {tipo === 'Click' ? <button className={`lupa`} onClick={aparecerBarra}>{!barraVisivel ? <FontAwesomeIcon icon={faMagnifyingGlass} /> : <FontAwesomeIcon icon={faXmark} />}</button> : null}
        </>
    );
};

export default BarraDePesquisa;