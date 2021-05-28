import {
    START_PHOTOS_LOADING,
    STOP_PHOTOS_LOADING,
    SET_PHOTOS,
    SET_PHOTOS_ERROR
} from '../action-types';

const initialState = {
    photos: [],
    isPhotosLoading: false,
    error: ''
};

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_PHOTOS_LOADING: {
            return {
                ...state,
                isPhotosLoading: true
            }
        }
        case STOP_PHOTOS_LOADING: {
            return {
                ...state,
                isPhotosLoading: false
            }
        }
        case SET_PHOTOS: {
            return {
                ...state,
                photos: action.payload
            }
        }
        case SET_PHOTOS_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}