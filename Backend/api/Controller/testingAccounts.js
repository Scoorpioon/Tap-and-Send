module.exports = () => {
    const testingAccountsData = require('../data/testingAccounts.json');
    const controller = {};

    controller.dadosDasContas = (req, res) => res.status(200).json(testingAccountsData);

    return controller;
};