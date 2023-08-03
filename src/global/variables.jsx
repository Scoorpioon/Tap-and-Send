class Variaveis{
    static idAtual = 'Contato0';

    static verificarHorario = (horario) => {
        horario = horario.toString();
        horario = horario.split('');
        if(horario[1] === undefined) {
            horario.unshift('0');
            return horario.toString().replace(',', '');
        } else {
            return horario.toString().replace(',', '');
        };

        /* if(this.horaAtual[4] == undefined) {
            this.horaAtual = this.horaAtual.split('');
            this.horaAtual.splice(3, 0, '0');
        }; */
    };
    
    static data = new Date();
    static horaAtual = `${this.verificarHorario(this.data.getHours())}:${this.verificarHorario(this.data.getMinutes())}`;

};

export default Variaveis;