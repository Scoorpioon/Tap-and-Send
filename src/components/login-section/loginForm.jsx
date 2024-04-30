import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const LoginForm = (path) => {
    const [senhaVisivel, alterarVisibilidade] = useState(false);

    const visibilidadeSenha = () => {
        return senhaVisivel ? alterarVisibilidade(false) : alterarVisibilidade(true);
    }

    return(
        <form action="/login/try" method="POST">
                    <div className="inputs">
                        {/* <label htmlFor="username">Nome de usuário:</label> */}
                        <div className="inputBox">
                            <input type="text" name="username" id="username" placeholder="Nome de usuário" />
                            <span className="inputIcon">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </div>
                        {/* <label htmlFor="password">Senha:</label> */}
                        <div className="inputBox">
                            <input type="password" name="password" id="password" placeholder="Senha" />
                            <span className="inputIcon" style={{cursor: 'Pointer'}} onClick={visibilidadeSenha}>
                                {senhaVisivel ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                            </span>
                        </div>
                    </div>

                    <div className="passwordRelateds">
                        <div>
                            <input type="checkbox" name="rememberPass" id="rememberPass" />
                            <label htmlFor="rememberPass">Lembrar minha senha</label>
                        </div>

                        <a href="#">Esqueci minha senha...</a>
                    </div>

                    <input type="submit" value="Logar" />
                    <span className="trademark">2023 &copy; Desenvolvido por Gabriel A.</span>
                </form>
    );
};

export default LoginForm;