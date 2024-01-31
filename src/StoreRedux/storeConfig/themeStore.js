// index.js (en la carpeta /store)
import { createStore, combineReducers } from 'redux';
import themeReducer from '../reducers/themeReducer';
import deviceReducer from '../reducers/deviceReducer';
import todosReducer from '../reducers/todosReducer';
// Combina múltiples reducers si es necesario
const rootReducer = combineReducers({
  theme: themeReducer,
  deviceType: deviceReducer,
  todos: todosReducer
});

const store = createStore(rootReducer);

export default store;
