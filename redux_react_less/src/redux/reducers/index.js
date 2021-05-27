import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {commentsReducer} from "./commentsReducer";
import {albumsReducer} from "./albumsReducer";

export default combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    albums: albumsReducer
});