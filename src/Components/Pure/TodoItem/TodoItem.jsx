import './todoitem.style.css';

function TodoItem({todo, update, deleteTodo}) {
  const updateItem = () =>{ update(todo.id); }
  const deleteItem = () =>{ deleteTodo(todo.id); }
  return (
    <div className='todo-item'>
        <input type="checkbox" className='checkbox-item' onChange={updateItem} checked={todo.completed}/>
        <span className={'text-item ' + (todo.completed? 'text-completed': '')}> {todo.text}</span>
        <span className='close-button' onClick={deleteItem}>x</span>
    </div>
  )
}

export default TodoItem;