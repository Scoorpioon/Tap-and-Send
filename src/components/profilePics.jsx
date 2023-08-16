const SeletorDeFotos = ({props}) => {
    const fotoSelecionada = (foto) => {
        props.selecao(foto);
    };

    return(
        <select name="seletorDeFoto" id="seletorDeFoto" onChange={fotoSelecionada}>
            <option value="Foto1">Foto 1</option>
            <option value="Foto2">Foto 2</option>
            <option value="Foto3">Foto 3</option>
            <option value="Foto4">Foto 4</option>
        </select>
    );
};

export default SeletorDeFotos;
