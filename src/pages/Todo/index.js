import './index.css';
import Button from '../../components/Button';

const Todo = () => {
    
    const todos = [
        { id: 1, texte: "Todo 1"},
        { id: 2, texte: "Todo 2"},
        { id: 3, texte: "Todo 3"},
        { id: 4, texte: "Todo 4"},
    ]    
    return ( 
        <div className="todo">
            <h1>Todos</h1>
            <ul>{todos.map((todo) => <li>{todo.texte}</li> )}</ul>
            
           <Button texte="Texte de test" />
        </div>
     );
}
 
export default Todo;