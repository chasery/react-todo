import _ from 'lodash';
import { FETCH_COMPLETED, COMPLETE_TODO } from '../actions/types';

export default (state={}, action) => {
    switch (action.type) {
        case FETCH_COMPLETED:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case COMPLETE_TODO:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};