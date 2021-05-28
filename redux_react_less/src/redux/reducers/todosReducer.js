import {
    START_TODOS_LOADING,
    STOP_TODOS_LOADING,
    SET_TODOS,
    SET_TODOS_ERROR
} from '../action-types';

const initialState = {
    todos: [],
    isTodosLoading: false,
    error: ''
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TODOS_LOADING: {
            return {
                ...state,
                isTodosLoading: true
            }
        }
        case STOP_TODOS_LOADING: {
            return {
                ...state,
                isTodosLoading: false
            }
        }
        case SET_TODOS: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case SET_TODOS_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}