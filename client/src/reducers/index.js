import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './todoReducer';
import selectTodoReducer from './selectTodoReducer';

export default combineReducers({
    todos: todoReducer,
    todo: selectTodoReducer,
    form: formReducer
});