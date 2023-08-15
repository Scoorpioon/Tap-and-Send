import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import SeletorDeFotos from '../../profilePics';
import '../../../styles/contactBar.css';

const CaixaPerfil = ({nomeUsuario, fotoUsuario}) => {
    return(
        <div className="_perfilSection">
            <div className="infoUser">
                {/* <img src="" alt="Foto do usuário" /> */}
                <div style={{border: '1px solid black', borderRadius: '50px', width: '30px', height: '30px'}}></div>
                <span className="nomeUsuario">{nomeUsuario}</span>
            </div>
            <div className="userOptions">
                <button className="userConfig">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            </div>
        </div>
    );
};

export default CaixaPerfil;
