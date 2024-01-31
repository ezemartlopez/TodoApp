import './todoaddform.style.css';

export default function TodoAddForm({addTodo}) {

  const submit = (event) =>{
    event.preventDefault();
    const formulario = event.target;
    var newTodo = formulario.elements['newTodo'].value;
    if (newTodo.trim()!== '') {
      addTodo(newTodo);
      formulario.elements['newTodo'].value = '';
    }
  }
  return (
  <form onSubmit={submit}>
    <div className='todo-add-form-container'>
        <div className='button-container' type='submit' onClick={submit}>
          <span className='icon-button'>+</span>
        </div>
        <input name='newTodo' type="text" placeholder='Add new todo...' className='input-todo'/>        
    </div>
    </form>
  )
}
