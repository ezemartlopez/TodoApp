import { useRef } from 'react';
import './todoaddform.style.css';

export default function TodoAddForm({addTodo}) {
  const inputRef = useRef(null);
  const submit = (e) =>{
    e.preventDefault();
    addTodo(inputRef.current.value);
    inputRef.current.value='';
  }
  return (
  <form onSubmit={submit}>
    <div className='todo-add-form-container'>
        <div className='button-container' type='submit' onClick={submit}>
          <span className='icon-button'>+</span>
        </div>
        <input ref={inputRef} type="text" placeholder='Add new todo...' className='input-todo'/>        
    </div>
    </form>
  )
}
