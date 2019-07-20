import todos from "./apis/todos";
import {
    FETCH_TODOS,
    CREATE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    DELETE_TODO
} from "./types";

export const fetchTodos = () => async dispatch => {
    const response = await todos.get("/todos");

    dispatch({ type: FETCH_TODOS, payload: response.data });
};

// Modifying Todos
export const createTodo = formValues => async dispatch => {
    const response = await todos.post("/todos", {
        ...formValues,
        currentStatus: "open"
    });

    dispatch({ type: CREATE_TODO, payload: response.data });
};

export const editTodo = (id, formValues) => async dispatch => {
    const response = await todos.patch(`/todos/${id}`, formValues);

    dispatch({ type: EDIT_TODO, payload: response.data });
};

export const completeTodo = id => async dispatch => {
    const response = await todos.patch(`/todos/${id}`, {
        currentStatus: "completed"
    });

    dispatch({ type: COMPLETE_TODO, payload: response.data });
};

export const deleteTodo = id => async dispatch => {
    const response = await todos.patch(`/todos/${id}`, {
        currentStatus: "deleted"
    });

    dispatch({ type: DELETE_TODO, payload: response.data });
};
