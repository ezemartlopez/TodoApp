import { useState } from 'react';
import TodoItem from '../../Pure/TodoItem/TodoItem';
import TodoFooter from '../TodoFooter/TodoFooter';
import './todos.style.css';

function TodosContainer({todos, updateTodo, clearCompleted, deleteTodo}) {
  const [option, setoption] = useState('All');

  const setAllTodos = () =>{ setoption('All'); }
  const setActiveTodos = () =>{ setoption('Active'); }
  const setCompletedTodos = () =>{ setoption('Completed'); }

  const visiblityTodos = () =>{
    return option==='All'? todos: option==='Active'? todos.filter(todo => !todo.completed): option==='Completed'? todos.filter(todo => todo.completed): todos;
  }
  let todosFilter = visiblityTodos();
  return (
    <div className='todos-container'>
        {todosFilter.map((todo, index) => 
          <TodoItem todo={todo} key={index} update={updateTodo} deleteTodo={deleteTodo}/>
        )}
        <TodoFooter 
          total={todos.length}
          option={option}
          allTodos={setAllTodos}
          activeTodos={setActiveTodos}
          completedTodos={setCompletedTodos}
          clearCompleted={clearCompleted}
        ></TodoFooter>
    </div>
  )
}

export default TodosContainer;