import todos from "./apis/todos";
import {
  FETCH_TODOS,
  FETCH_COMPLETED,
  FETCH_TODO,
  CREATE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from "./types";

export const fetchTodos = () => async dispatch => {
  const response = await todos.get("/todos");

  dispatch({ type: FETCH_TODOS, payload: response.data });
};
export const fetchTodo = id => async dispatch => {
  const response = await todos.get(`/todos/${id}`);

  dispatch({ type: FETCH_TODO, payload: response.data });
};
export const fetchCompleted = () => async dispatch => {
  const response = await todos.get("/completed");

  dispatch({ type: FETCH_COMPLETED, payload: response.data });
};

// Modifying Todos
export const createTodo = formValues => async dispatch => {
  const response = await todos.post("/todos", { ...formValues });

  dispatch({ type: CREATE_TODO, payload: response.data });
};

export const editTodo = (id, formValues) => async dispatch => {
  const response = await todos.patch(`/todos/${id}`, formValues);

  dispatch({ type: EDIT_TODO, payload: response.data });
};

export const completeTodo = id => async dispatch => {
  const response = await todos.patch(`/todos/${id}`, { complete: true });

  dispatch({ type: COMPLETE_TODO, payload: response.data });
};

export const deleteTodo = id => async dispatch => {
  await todos.delete(`/todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: id });
};
