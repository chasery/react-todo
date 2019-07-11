import { SELECT_TODO } from '../actions/types';

export default (selectedTodo=null, action) => {
    if (action.type === SELECT_TODO) {
        return action.payload;
    }
    
    return selectedTodo;
};