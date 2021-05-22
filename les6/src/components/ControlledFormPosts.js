// "Створити контрольований компонент з формою та  одним інпутом.
// Інпут спроможний приймати тільки чіслові значення в діапазоні від 1 до 100.
// Після введення відповідного числа в інпут, зробити запит на jsonplaceholder та
// отримати пост з відповідним ід та репрезентувати всю його інформацію в окремому компоненті.
// Додаткове (після завершення основного завдання) :
// При запиті з форми, зробити перехід на наступну сторінку на якій репрезентувати всю інформацію."

import {useEffect, useState} from "react";

export default function ControlledFormPosts() {

    let [formState, setFormState] = useState({postId: ''});
    let {postId} = formState;
    let [post, setPost] = useState(null);
        useEffect(() => {
        if(postId > 0) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
                .then(value => value.json())
                .then(value => {
                    setPost({...value});
                });
        }
    }, [postId]);

    let onValueChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormState({...formState, [name]:value});
    }

    let submit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="number" name={'postId'} value={postId} onChange={onValueChange} min="1" max="100"/>
                <button>Submit</button>
            </form>
            {post && <div> <h2>Post # {post.id}</h2> <h3>{post.title}</h3>
            {post.body}
            </div>}
        </div>
    );
}