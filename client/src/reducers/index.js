import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './todoReducer';
import completedReducer from './completedReducer';

export default combineReducers({
    todos: todoReducer,
    completed: completedReducer,
    form: formReducer
});