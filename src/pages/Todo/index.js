import { useRef, useState } from 'react';
import './index.css';
import Button from '../../components/Button';

const Todo = () => {
    
    /** useState est un hook */
    const [todos, setTodos] = useState([
        { id: 1, texte: "Todo 1"},
        { id: 2, texte: "Todo 2"},
        { id: 3, texte: "Todo 3"},
        { id: 4, texte: "Todo 4"},
    ]);
    
    // const [newTodoText, setNewTodoText] = useState();
    const textRef = useRef(); //
    

    /** Supprimer une todo */
    const supprimer = (id) => {

    /** Méthode compliquée */
    // const newTodos = [...todos]; /** ... -> spread operator */
    // const index = todos.findIndex((todo) => todo.id);
    // newTodos.splice(index, 1);
    // console.log(newTodos);

    // setTodos(newTodos);

    /**Méthode simple */
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
}

    // const updateNewTodo = (e) => {
    //     console.log(e.target.value);
    //     setNewTodoText(e.target.value);
    // }

    const ajouter = () => {
        const newTodo = { id: todos.length + 1, texte: textRef.current.value }
        setTodos(prevState => [...prevState, newTodo]);
    }

    return ( 
        <div className="todo">
            <h1>Todos</h1>

            <div>
                {/* <input type="text" onChange={(e) => updateNewTodo(e)} /> */}
                <input type="text" ref={textRef}/>&nbsp;
                <Button texte="Ajouter" onClick={ajouter} />
            </div>

            <ul>
            {todos.map((todo) => (
                <li id={`todos-${todo.id}`} key={`todos-${todo.id}`}>
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
 
export default Todo;