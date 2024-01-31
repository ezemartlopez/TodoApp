import './todoapp.style.css';
import TittleApp from '../TittleApp/TittleApp';
import TodosContainer from '../TodosContainer/TodosContainer';
import TodoAddForm from '../TodoAddForm/TodoAddForm';
import { connectTodos } from '../../../StoreRedux/conectors/conectFunction';

function TodoApp({todos, addTodo, updateTodo, deleteTodo, loadTodos, clearCompleted}) {
  const propsContainer = {
    todos,
    updateTodo,
    clearCompleted,
    deleteTodo
  }
  return (
    <div className='todo-app-container'>
        <TittleApp></TittleApp>
        
        <TodoAddForm addTodo={addTodo}></TodoAddForm>

        <TodosContainer {...propsContainer}></TodosContainer>
    </div>
  )
}

export default connectTodos(TodoApp);