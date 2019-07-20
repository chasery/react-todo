import {
    FETCH_TODOS,
    CREATE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    DELETE_TODO
} from "../actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return [
                ...action.payload.filter(
                    todo => todo.currentStatus !== "deleted"
                )
            ];
        case CREATE_TODO:
            return [...state, action.payload];
        case EDIT_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return todo;
            });
        case COMPLETE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return todo;
            });
        case DELETE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return todo;
            });
        default:
            return state;
    }
};
