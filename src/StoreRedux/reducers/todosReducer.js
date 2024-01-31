import { ADD_TODO, 
        DELETE_TODO, 
        UPDATE_TODO, 
        LOAD_TODOS, 
        CLEAR_COMPLETED } from '../constants/todosActionsTypes';

const initialState = {
    todos: []
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { todos: [ action.payload, ...state.todos] };
        case DELETE_TODO:
            return { todos: state.todos.filter((todo) => todo.id !== action.payload.id) };
        case UPDATE_TODO:
            return {
                todos: state.todos.map((todo) =>
                    (todo.id === action.payload.id) ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case LOAD_TODOS:
            return { todos: action.payload.todos };
        case CLEAR_COMPLETED:
            return {todos: state.todos.filter(todo => !todo.completed)};
        default:
            return state;
    }
};

export default todosReducer;
