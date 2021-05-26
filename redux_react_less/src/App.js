import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    START_POSTS_LOADING,
    STOP_POSTS_LOADING,
    SET_POSTS
} from './redux';

const Posts = () => {
    const data = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(data);
    const postsFetcher = async () => {
        try {
            dispatch({type: START_POSTS_LOADING});
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await resp.json();
            dispatch({type: SET_POSTS, payload: data});
        } catch (e) {
            console.log(e);
        } finally {
            dispatch({type: STOP_POSTS_LOADING});
        }
    };

    useEffect(() => {
        postsFetcher();
    }, []);

    if (data.isPostsLoading) {
        return <h1>Posts are loading!!!</h1>
    }

    return (
        <div>
            {data.posts.map(({id, title, body}) => (
                <p key={id}>
                    {title} -----> <br/> {body}
                </p>
            ))}
        </div>
    )
};
export default function App() {

    return (
        <div>
            <Posts/>
        </div>
    );
}
