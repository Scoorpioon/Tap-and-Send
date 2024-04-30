const Sugestoes = ({commands}) => {
    return(
        <ul className="_listaDeComandos">
            {commands.map(command => {
                return(
                    <li className="comando-lista">
                        <h3>{command.name}</h3>
                        <span>{command.description}</span>
                    </li>
                )
            })}
        </ul>
    );
};

export default Sugestoes;