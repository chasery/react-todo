import _ from 'lodash';
import { FETCH_TODOS,
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../actions/types';

export default (state={}, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case CREATE_TODO:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_TODO:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_TODO:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};