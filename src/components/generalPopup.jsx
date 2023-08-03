import {useState, useContext} from 'react';
import { DadosDoUsuario } from '../global/userData';
import axios from 'axios';
import '../styles/popups.css'

const AdicionarContato = ({titulo, descricao, campos}) => {
    const {ativarPopup} = useContext(DadosDoUsuario);
    const [dadosContato, setDadosContato] = useState();

    const enviarNovosDadosContato = (evento) => {
        evento.preventDefault();
        axios.post('http://localhost:1337/test', {dadosContato}).catch((erro) => console.log(`Erro ao adicionar contato: ${erro}`))
    };

    return(
        <>
            <div className="background" onClick={() => {ativarPopup(false)}}>
            </div>
                <div className="popup">
                    <h2>Adicionar contato</h2>
                    <form action="" onSubmit={enviarNovosDadosContato}>
                        <div className="inputBox">
                            <label htmlFor="nomeContato">Nome do contato:</label>
                            <input type="text" name="nomeContato" id="nomeContato" placeholder="Nome..." />
                        </div>

                        <div className="inputBox">
                            <label htmlFor="numeroContato">Número do contato:</label>
                            <input type="text" name="numeroContato" id="numeroContato" placeholder="(99) 91234-5678" />
                        </div>
                        <button onClick={() => {console.log('Clicado')}} type="submit">Adicionar</button>
                    </form>
                </div>
        </>
    );
};

export default AdicionarContato;