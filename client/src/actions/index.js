import todos from './apis/todos';
import { FETCH_TODOS
    // FETCH_TODO,
    // CREATE_TODO,
    // EDIT_TODO,
    // COMPLETE_TODO,
    // DELETE_TODO
} from './types';

export const fetchTodos = () => async dispatch => {
    const response = await todos.get('/todos');

    dispatch({ type: FETCH_TODOS, payload: response.data });
};
// export const fetchTodo = (id) => {
//     dispatch({ type: FETCH_TODO, payload: null });
// }

// // Modifying Todos
// export const createTodo = (formValues) => {
//     dispatch({ type: CREATE_TODO, payload: null });
// };

// export const editTodo = (id, formValues) => {
//     dispatch({ type: EDIT_TODO, payload: null });
// }

// export const completeTodo = (id) => {
//     dispatch({ type: COMPLETE_TODO, payload: null });
// }

// export const deleteTodo = (id) => {
//     dispatch({ type: DELETE_TODO, payload: null });
// }