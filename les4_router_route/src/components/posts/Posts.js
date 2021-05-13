import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts(props) {
    let {match: {url}} = props;
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value]);
            });
    }, []);
    return (
        <div>
            {
            posts.map(value => <Post key={value.id} item={value} url={url} />)
        }
        </div>
    );
}