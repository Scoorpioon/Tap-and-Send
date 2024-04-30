import {useState, useContext, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { DadosDoUsuario } from '../global/TemporaryClasses/userData';
import '../styles/popups.css'

const AdicionarContato = ({titulo, descricao, campos}) => {
    const {ativarPopup} = useContext(DadosDoUsuario);
    const [dadosContato, setDadosContato] = useState();
    const [erroCampo, setarErroCampo] = useState(false);
    const campoNome = useRef();
    const campoNumero = useRef();

    const {idAtual, ListaDeContatos} = useSelector(rootReducer => rootReducer.contactReducer);
    const dispatch = useDispatch();

    const enviarNovosDadosContato = (evento) => {
        evento.preventDefault();
        /* axios.post('http://localhost:1337/test', {dadosContato}).catch((erro) => console.log(`Erro ao adicionar contato: ${erro}`)) */

        if(!campoNome) {
            console.log('O nome do contato não foi preenchido!');
        } else if(!campoNumero) {
            console.log('O número do contato não foi preenchido!');
        }
    }; // Essa será a function definitiva, mas será usada apenas quando o Back-End for implementado.

    const enviarDadosBotao = () => {
        if(campoNome.current.value === '' || campoNumero.current.value === '') {
            console.log('Alguma informação não foi preenchida!');
            setarErroCampo(true);
        } else {
            dispatch({
                type: 'contato/adicionar',
                novoContato: [...ListaDeContatos, {
                    id: ListaDeContatos.length++,
                    nome: campoNome.current.value,
                    numero: campoNumero.current.value,
                    mensagemAtual: undefined,
                    mensagens: [{
                        textoDaMensagem: null,
                        autor: null,
                        horario: null
                      }]
                }]

            });

            ativarPopup(false);
            setarErroCampo(false);
        };

        console.log(ListaDeContatos);
    };

    return(
        <>
            <div className="background" onClick={() => {ativarPopup(false)}}>
            </div>
                <div className="popup">
                    <h2>Adicionar contato</h2>
                    <form action="" onSubmit={enviarNovosDadosContato} className={erroCampo ? 'formularioInvalido' : null}>
                        <div className="inputBox">
                            <label htmlFor="nomeContato">Nome do contato:</label>
                            <input type="text" ref={campoNome} name="nomeContato" id="nomeContato" placeholder="Nome..." />
                        </div>

                        <div className="inputBox">
                            <label htmlFor="numeroContato">Número do contato:</label>
                            <input type="text" ref={campoNumero} name="numeroContato" id="numeroContato" placeholder="(99) 91234-5678" />
                        </div>
                        {erroCampo ? <span>Por favor, complete todos os campos.</span> : null}
                        <button onClick={enviarDadosBotao} type="submit">Adicionar</button>
                    </form>
                </div>
        </>
    );
};

export default AdicionarContato;
