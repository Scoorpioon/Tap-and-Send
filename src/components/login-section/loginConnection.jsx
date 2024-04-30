import {useEffect, useState} from 'react';

const LoginConnection = () => {
    const [dados, receberDados] = useState({});

    useEffect(() => {
        fetch("/login/try")
        .then(resposta => resposta.json)
        .then(Dados => receberDados(Dados))
        .catch((error) => {
            console.log(`Ih, deu erro... ${error}`)
        });

        console.log(dados);
    });

    return(
        <main>
            <div className="connectionVoid">
                <p>Validando informações...</p>
            </div>
        </main>
    );
};

export default LoginConnection;