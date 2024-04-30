/* elements = [{
    InputType: 'text',
    Placeholder: 'teste',
    Label: 'input de nome',
    Identification: 'InputNome'
}, 
{
    InputType: 'password',
    Placeholder: 'teste',
    Label: 'input de senha',
    Identification: 'InputSenha'
}] */

const GPopup = ({elements, title}) => {
    return(
    <div className="generalPopup">
        <div className="titleBox">
            <h1>{title}</h1>
        </div>

        {elements.map(element => {
            if(element.InputType === 'submit') {
                return <input type="submit" value={element.Value} />
            } else {
                return( 
                <>
                <label htmlFor={element.Identification}>{element.Label}</label>
                <input type={element.InputType} name={element.Identification}
                    id={element.Identification} placeholder={element.Placeholder} />
                </>
                );
            }
        })}
    </div>
    );
};

export default GPopup;