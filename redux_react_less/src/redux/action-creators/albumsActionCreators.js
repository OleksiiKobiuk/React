import {SET_ALBUMS, START_ALBUMS_LOADING, STOP_ALBUMS_LOADING, SET_ALBUMS_ERROR} from "../action-types";

export const startAlbumsLoading = () => ({type: START_ALBUMS_LOADING});
export const stopAlbumsLoading = () => ({type: STOP_ALBUMS_LOADING});
export const setAlbums = (payload) => ({type: SET_ALBUMS, payload});
export const setAlbumsError = (payload) => ({type: SET_ALBUMS_ERROR, payload});