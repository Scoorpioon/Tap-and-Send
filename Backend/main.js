const express = require('express');
const application = express();
const port = 1337;

// testing
const user = {
    name: 'Gabriel',
    password: '1337lol'
}

// configs
    application.use(express.json());
    application.use(express.urlencoded({ extended: true }));

// routes
    application.get('/', (req, res) => {
        res.sendFile(__dirname + '/temporaryHtml/index.html');
    });

    application.post('/login/try', (req, res) => {
        console.log(req.body.username, req.body.password);
    });

    // Testing routes
        application.post('/debug', (req, res) => {
            res.sendFile(__dirname + '/temporaryHtml/login.html');

            const campo1 = req.body.campo1;
            const campo2 = req.body.campo2

            if(campo1 == user.name && campo2 == user.password) {
                res.send("Os dados estão corretos, o usuário está logado");
            } else {
                res.send("Deu certo não mano");
            }
        });

application.listen(port, () => {
    console.log(`Aplicação hospedada na porta ${port}`);
});