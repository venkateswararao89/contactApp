import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete } from './todoSlice';

const Todo = () => {
    const[text,setText]  = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

 const handleInputChange = (e) => {
    setText(e.target.value);
 };

 const handleAddTodo = () => {
    if(text){
        dispatch(addTodo(text));
        setText("")
    }
 };
 const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
 }
 const handleDeleteTod = (id) =>{
    dispatch(deleteTodo(id));
 }
  return (
    <div>
        <input type='text' value={text} onChange={handleInputChange}/>{""}
        <button onClick={handleAddTodo}>Add Tod</button>
        <ul>
            {""}
            {todos.map((todo) =>(
                <li key={todo.id}
                style={{textDecoration:todo.completed ? "line-through" : "none"}}>

                    {todo.text}{""}
                    <button onClick={() => handleToggleComplete(todo.id)}>
                        {""}

             {todo.completed ? "mark Incomplete" : "Mark Complete"}{""}

             <button onClick={() => handleAddTodo(todo.id)}>Delete

             </button>
                    </button>

                </li>
            ))}{""}
        </ul>{""}
    </div>
  )
}

export default Todo