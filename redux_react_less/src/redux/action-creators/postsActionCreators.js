import {SET_POSTS, START_POSTS_LOADING, STOP_POSTS_LOADING, SET_POSTS_ERROR} from "../action-types";

export const startPostsLoading = () => ({type: START_POSTS_LOADING});
export const stopPostsLoading = () => ({type: STOP_POSTS_LOADING});
export const setPosts = (payload) => ({type: SET_POSTS, payload});
export const setPostsError = (payload) => ({type: SET_POSTS_ERROR, payload});