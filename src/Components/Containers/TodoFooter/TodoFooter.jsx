import './todofooter.style.css';

function TodoFooter({total, option, allTodos, activeTodos, completedTodos, clearCompleted}) {
  
  return (
    <div className='todo-footer-container'>
        <span className='todo-text'>{total} items left</span>
        <div className='todo-options'>
            <span className={'todo-option ' + (option==='All'? 'active-option':'')} onClick={allTodos}>All</span>
            <span className={'todo-option ' + (option==='Active'? 'active-option':'')} onClick={activeTodos}>Active</span>
            <span className={'todo-option ' + (option==='Completed'? 'active-option':'')} onClick={completedTodos}>Completed</span>
        </div>
        <span className='todo-button-clear' onClick={clearCompleted}>Clear Completed</span>
    </div>
  )
}

export default TodoFooter;