import React from 'react';
import LoginForm from './loginForm';
import '../../styles/loginScreen.css';

// o Back-end de login estará centralizado principalmente neste arquivo.

const LoginScreen = () => {
    return(
        <main>
            <section className="_loginScreen">
                <div id="formCard">
                    <h1>Tap and Send</h1>
                    <LoginForm />
                </div>
            </section>
        </main>
    );
};

export default LoginScreen;
