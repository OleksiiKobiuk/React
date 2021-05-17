import {useEffect, useReducer, useState} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'GET_POSTS':
            return {...state, posts: action.payload};
        case'CHOOSE_POST':
            return {...state, post: action.payload};
        default:
            return {...state};
    }
}

export default function Posts_using_reducer() {
    let [state, dispatch] = useReducer(reducer, {posts: [], post: {}});
    let {posts, post} = state;
    // let [posts, setPosts] = useState([]);
    // let [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'GET_POSTS', payload: value});
                // setPosts([...value]);
            });
    }, []);

    let choosePost = (id) => {
        let find = posts.find(value => value.id === id);
        dispatch({type: 'CHOOSE_POST', payload: find});
        // setPost(find);
    }

    return (
        <div>
            {
                post && <div>{post.id}: {post.body}</div>
            }
            <hr/>
            {
                posts.map(value => {
                    return <div key={value.id}>{value.id}: {value.title}
                        <button onClick={() => choosePost(value.id)}>Choose</button>
                    </div>
                })
            }
        </div>
    );
}