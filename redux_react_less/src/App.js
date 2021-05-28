import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    startPostsLoading,
    stopPostsLoading,
    setPosts,
    setPostsError,

    setComments,
    setCommentsError,
    startCommentsLoading,
    stopCommentsLoading,

    setAlbums,
    setAlbumsError,
    startAlbumsLoading,
    stopAlbumsLoading,

    startPhotosLoading,
    stopPhotosLoading,
    setPhotos,
    setPhotosError,

    startTodosLoading,
    stopTodosLoading,
    setTodos,
    setTodosError
} from './redux';


const Posts = () => {
    const data = useSelector(({posts}) => posts);
    const dispatch = useDispatch();
    const postsFetcher = async () => {
        try {
            dispatch(startPostsLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await resp.json();
            dispatch(setPosts(data));
        } catch (e) {
            console.log(e);
            dispatch(setPostsError('failed to fetch data'))
        } finally {
            dispatch(stopPostsLoading());
        }
    };

    useEffect(() => {
        postsFetcher();
    }, []);

    if (data.isPostsLoading) {
        return <h1>Posts are loading!!!</h1>
    }
    if (data.error) {
        return <h1>{data.error}</h1>
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
const Comments = () => {
    const data = useSelector(({comments}) => comments);
    const dispatch = useDispatch();
    console.log(data);
    const commentsFetcher = async () => {
        try {
            dispatch(startCommentsLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await resp.json();
            dispatch(setComments(data));
        } catch (e) {
            console.log(e);
            dispatch(setCommentsError('failed to fetch data'))
        } finally {
            dispatch(stopCommentsLoading());
        }
    };

    useEffect(() => {
        commentsFetcher();
    }, []);

    if (data.isCommentsLoading) {
        return <h1>Comments are loading!!!</h1>
    }
    if (data.error) {
        return <h1>{data.error}</h1>
    }


    return (
        <div>
            {data.comments.map(({id, name, body}) => (
                <p key={id}>
                    <h3>{name}</h3> {body}
                </p>
            ))}
        </div>
    )
};
const Albums = () => {
    const data = useSelector(({albums}) => albums);
    const dispatch = useDispatch();
    const albumsFetcher = async () => {
        try {
            dispatch(startAlbumsLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/albums')
            const data = await resp.json();
            dispatch(setAlbums(data));
        } catch (e) {
            console.log(e);
            dispatch(setAlbumsError('failed to fetch data'))
        } finally {
            dispatch(stopAlbumsLoading());
        }
    };

    useEffect(() => {
        albumsFetcher();
    }, []);

    if (data.isAlbumsLoading) {
        return <h1>Albums are loading!!!</h1>
    }
    if (data.error) {
        return <h1>{data.error}</h1>
    }


    return (
        <div>
            {data.albums.map(({id, userId, title}) => (
                <p key={id}>
                    User #{userId}: {title}
                </p>
            ))}
        </div>
    )
};
const Photos = () => {
    const data = useSelector(({photos}) => photos);
    const dispatch = useDispatch();
    console.log(data);
    const photosFetcher = async () => {
        try {
            dispatch(startPhotosLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/photos/')
            const data = await resp.json();
            dispatch(setPhotos(data));
        } catch (e) {
            console.log(e);
            dispatch(setPhotosError('failed to fetch data'))
        } finally {
            dispatch(stopPhotosLoading());
        }
    };

    useEffect(() => {
        photosFetcher();
    }, []);

    if (data.isPhotosLoading) {
        return <h1>Photos are loading!!!</h1>
    }
    if (data.error) {
        return <h1>{data.error}</h1>
    }


    return (
        <div>
            {data.photos.map(({id, url, title, thumbnailUrl}) => (
                <p key={id}>
                    <h2> Title: {title}</h2> <br/>
                    <img key={url} src={thumbnailUrl}/>
                </p>
            ))}
        </div>
    )
};
const Todos = () => {
    const data = useSelector(({todos}) => todos);
    const dispatch = useDispatch();
    const todosFetcher = async () => {
        try {
            dispatch(startTodosLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await resp.json();
            console.log(data);
            dispatch(setTodos(data));
        } catch (e) {
            dispatch(setTodosError('failed to fetch data'));
        } finally {
            dispatch(stopTodosLoading());
        }
    };
    useEffect(() => {
        todosFetcher();
    }, []);
    console.log(data)

    // if (data.isTodosLoading) {
    //     return <h1>Todos are loading</h1>
    // }
    // if (data.error) {
    //     return <h1>{data.error}</h1>
    // }

    return (
        <div>
            {data.todos.map(({id, title, completed}) => (
                <p key={id}>
                    {title} <h3>Copmleted: {completed.toString()}</h3>
                </p>
            ))}
        </div>
    )
};

export default function App() {

    return (
        <div>
            {/*<Posts/>*/}
            {/*<Comments/>*/}
            {/*<Albums/>*/}
            {/*<Photos/>*/}
            <Todos/>
        </div>
    );
}
