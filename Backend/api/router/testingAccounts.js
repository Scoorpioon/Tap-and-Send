module.exports = (app) => {
    const controller = require('../Controller/testingAccounts');

    app.route('/api/contasDeTeste').get(controller.dadosDasContas);
}