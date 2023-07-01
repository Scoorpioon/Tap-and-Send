import React from 'react';
import '../../styles/contactBar.css';
import Contato from '../contact';

const BarraContatos = () => {
    return(
        <div className="_contactBar">
            <h1>Contatos</h1>
            <Contato />
            <Contato />
            <Contato />
            <Contato />
            <Contato />
        </div>
    );
};

export default BarraContatos;