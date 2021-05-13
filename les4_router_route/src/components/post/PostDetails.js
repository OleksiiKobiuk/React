import {useEffect, useState} from "react";

export default function PostDetails(props) {
    let {match: {params: {id}}} = props;
    let [post, setPost] = useState(null);
    console.log(props);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => {
                setPost({...value});
            });
    }, [post])
    return (
        <div>
            {post && <h4>{post.id} - {post.title} - {post.body} </h4>}
        </div>
    );
}