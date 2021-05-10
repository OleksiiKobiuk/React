import {useState, useEffect} from 'react';
import axiosInstance from '../../services/api';
import Post from "../post/Post";
import './Posts.css';

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState(null);

    useEffect(() => {
        axiosInstance.get('posts').then(value => setPosts([...value.data]));
    }, []);

    const searchPostDetail = (id) => {
        let foundPost = posts.find(value => value.id === id);
        console.log(foundPost);
        setSinglePost(foundPost);
    }

    return (
        <div className={'wrapper'}>
            <div className={'posts-box'}>
                {
                    posts.map(value => <Post
                        key={value.id}
                        item={value}
                        searchPostDetail={searchPostDetail}/>)
                }
            </div>
            <div className={'single-post-box'}>
                {
                    singlePost && <h4>{singlePost.id} -
                        {singlePost.body} <div> UserId: {singlePost.userId}.</div>
                    </h4>
                }
            </div>
        </div>
    );
}
