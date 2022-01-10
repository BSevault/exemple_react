import "./index.css"

const Button = ( {texte, ...rest } ) => { // ...rest -> utilisation du spread operator "..." afind e récup toutes les props restantes
    return ( 
        <button {...rest} className="button">
            { texte }
        </button>
     );
}



export default Button;