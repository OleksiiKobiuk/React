import {SET_PHOTOS, START_PHOTOS_LOADING, STOP_PHOTOS_LOADING, SET_PHOTOS_ERROR} from "../action-types";

export const startPhotosLoading = () => ({type: START_PHOTOS_LOADING});
export const stopPhotosLoading = () => ({type: STOP_PHOTOS_LOADING});
export const setPhotos = (payload) => ({type: SET_PHOTOS, payload});
export const setPhotosError = (payload) => ({type: SET_PHOTOS_ERROR, payload});