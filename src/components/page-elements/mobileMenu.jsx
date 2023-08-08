import React from 'react';
import '../../styles/mobileMenu.css';

const MenuMobile = () => {
    const opcaoClicada = () => {
        console.log('Opção clicada!');
    }

    return(
        <nav className="_mobileNavigation">
            <ul>
                <li><button onClick={opcaoClicada} className="opcaoMenu">Contatos</button></li>
                <li><button onClick={opcaoClicada} className="opcaoMenu">Chat</button></li>
                <li><button onClick={opcaoClicada} className="opcaoMenu">Perfil</button></li>
            </ul>
        </nav>
    );
};

export default MenuMobile;