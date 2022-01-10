import { useRef, useState } from 'react'; // On importe les hook useRef et useState
import './index.css';
import Button from '../../components/Button'; //On importe le composant Button

const Todo = () => {
    
    /** useState est un hook */
    const [todos, setTodos] = useState([ //On déclare le state initial
        { id: 1, texte: "Todo 1"},
        { id: 2, texte: "Todo 2"},
        { id: 3, texte: "Todo 3"},
        { id: 4, texte: "Todo 4"},
    ]);
    
    // const [newTodoText, setNewTodoText] = useState();
    const textRef = useRef(); // Je crée une ref que je rpévois de rattacher à l'élément input text afind 'en recup la valeur
    

    /** Supprimer une todo */
    const supprimer = (id) => {
        /**Méthode simple */
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id)); //On utilise setTodos afon de filter le tableau todos avec filter

    /** Méthode compliquée */
    // const newTodos = [...todos]; // ... -> spread operator 
    // const index = todos.findIndex((todo) => todo.id);
    // newTodos.splice(index, 1);
    // console.log(newTodos);

    // setTodos(newTodos);

}

    // const updateNewTodo = (e) => {
    //     console.log(e.target.value);
    //     setNewTodoText(e.target.value);
    // }

    const ajouter = () => {
        const newTodo = { id: todos.length + 1, texte: textRef.current.value } // On récup la valeur textRef afin de l'affecter à la nouvelle todo
        setTodos(prevState => [...prevState, newTodo]); // On ajoute une todo via setTodo
    }

    return (    //On effectue le rendu de la page todo
        <div className="todo">
            <h1>Todos</h1>

            <div>
                {/* <input type="text" onChange={(e) => updateNewTodo(e)} /> */}
                <input type="text" ref={textRef}/>&nbsp;  { /* On rattache textRef à l'input*/ }
                <Button texte="Ajouter" onClick={ajouter} /> { /* On rattache la fonction ajouter à l'évènement onClick*/ }
            </div>

            <ul>
            {todos.map((todo) => (  //On utilise la fonction map afin de parcouri les todos et de retourner l'affichage attendu => <li> le texte <Button/> </li>
                <li id={`todos-${todo.id}`} key={`todos-${todo.id}`}> {/* key doit etre unique si possible, nécéssaire à react*/}
                    {todo.texte} &nbsp;
                    {/* <button  onClick={() => supprimer(todo.id)} >Supprimer</button> */}
                    <Button texte="Supprimer" onClick={() => supprimer(todo.id)}/>
                </li>
                ))} 
            </ul>
            
           <Button texte="Texte de test" />
        </div>
     );
}
 
export default Todo; //On exporte le composant Todo