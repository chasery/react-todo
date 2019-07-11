import todos from './apis/todos';
import { FETCH_TODOS,
    SELECT_TODO,
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from './types';

export const fetchTodos = () => async dispatch => {
    const response = await todos.get('/todos');

    dispatch({ type: FETCH_TODOS, payload: response.data });
};
export const selectTodo = (id) => async dispatch => {
    const response = await todos.get(`/todos/${id}`);

    dispatch({ type: SELECT_TODO, payload: response.data });
}

// Modifying Todos
export const createTodo = formValues => async dispatch => {
    const response = await todos.post('/todos', { ...formValues });

    dispatch({ type: CREATE_TODO, payload: response.data });
};

export const editTodo = (id, formValues) => async dispatch => {
    const response = await todos.patch(`/todos/${id}`, formValues);

    dispatch({ type: EDIT_TODO, payload: response.data });
}


export const deleteTodo = (id) => async dispatch => {
    await todos.delete(`/todos/${id}`);
    
    dispatch({ type: DELETE_TODO, payload: id });
}