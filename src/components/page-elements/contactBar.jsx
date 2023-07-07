import React from 'react';
import '../../styles/contactBar.css';
import Contato from '../contact';
import {useState} from 'react';

const BarraContatos = () => {
    const [contatos, inserirContato] = useState([{
        id: 0,
        nome: 'Matheus Godoy',
        mensagem: 'Sou uma mensagem de teste...',
        /* foto: '***' */
      }, {
        id: 1,
        nome: 'Alef Kwanzas',
        mensagem: 'tomale'
      }]);

    const [ids, incrementarId] = useState(2);

      const adicionarContato = () => {
        inserirContato([...contatos, {
            id: ids,
            nome: 'Teste',
            mensagem: 'Como vou fazer isso?'
        }]);

        incrementarId(ids => ids + 1);
      };

    return(
        <div className="_contactBar">
            <h1>Contatos</h1>
            {contatos.map((contato) => {return <Contato key={contato.id} nome={contato.nome} texto={contato.mensagem} id={contato.id} />})}
            <div className="temporaryBottomContainer">
              <button onClick={adicionarContato}>Adicionar contato</button>
              <span className="trademark">&copy; Desenvolvido por Gabriel A.</span>
            </div>
        </div>
    );
};

export default BarraContatos;
