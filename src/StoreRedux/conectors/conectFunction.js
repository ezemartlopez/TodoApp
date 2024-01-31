
import { connect } from 'react-redux';
import { toggleTheme } from '../actions/themeActions';
import { setWindowWidth } from '../actions/deviceActions';
import { add_todo, clear_completed, delete_todo, load_todos, update_todo } from '../actions/todosActions';


export function connectTheme(component){
  const mapStateToProps = (state) => ({
    mode: state.theme.mode,
  });
  
  const mapDispatchToProps = {
    toggleTheme: toggleTheme
  };
    //el componente debe tener estas props
    //{ mode, toggleTheme }
    return connect(mapStateToProps, mapDispatchToProps)(component);
}

export function connectThemeDevice(component){
  const mapStateToProps = (state) => ({
    mode: state.theme.mode,
    device: state.deviceType.device
  });
  
  const mapDispatchToProps = {
  };
    //el componente debe tener estas props
    //{ mode, toggleTheme }
    return connect(mapStateToProps, mapDispatchToProps)(component);
}

export function connectDeviceMode(component){
  const mapStateToProps = (state) => ({
    mode: state.theme.mode,
  });
  
  const mapDispatchToProps = {
    setWindowWidth: setWindowWidth
  };
    //el componente debe tener estas props
    //{ mode, toggleTheme }
    return connect(mapStateToProps, mapDispatchToProps)(component);
}

export function connectTodos(component){
  const mapStateToProps = (state) => ({
    todos: state.todos.todos,
  });
  
  const mapDispatchToProps = {
    addTodo: add_todo,
    updateTodo: update_todo,
    deleteTodo: delete_todo,
    loadTodos: load_todos,
    clearCompleted: clear_completed
  };
    //el componente debe tener estas props
    //{ mode, toggleTheme }
    return connect(mapStateToProps, mapDispatchToProps)(component);
}