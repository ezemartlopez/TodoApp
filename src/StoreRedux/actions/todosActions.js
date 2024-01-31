import { 
    ADD_TODO, 
    DELETE_TODO, 
    UPDATE_TODO, 
    LOAD_TODOS,
    CLEAR_COMPLETED
 } from '../constants/todosActionsTypes';

let id_increment = 1;

export const add_todo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: id_increment++,
            text: text,
            completed: false,
            date: Date.now()
        }
    };
}

export const delete_todo = (id) => {
    return {
        type: DELETE_TODO,
        payload:{
            id: id
        }
    };
}

export const update_todo = (id) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id: id
        }
    };
}

export const load_todos = (todos) => {
    //obtengo el id maximo de la lista de todos
    const ids = todos.map((todo)=> todo.id);
    id_increment = Math.max(...ids);
    return {
        type: LOAD_TODOS,
        payload:{
            todos: todos
        }
    }
}

export const clear_completed = () => {
    return {
        type: CLEAR_COMPLETED
    }
}