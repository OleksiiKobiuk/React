// import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
export default function UserDetails(props) {
    let {match: {params: {id}}, location: {state}} = props;
    let[user,setUser] = useState(null); //передаємо 1 юзера
    // useEffect(() => {
    //      fetch('https://jsonplaceholder.typicode.com/users/' + id)
    //         .then(value => value.json())
    //         .then(value => {
    //             setUser({...value});
    //         });
    // }, [id])
     useEffect(() => {
         setUser(state);
    }, [id]);
    return (
        <div>
            {user && <h3>{user.id} - {user.name}: {user.email}</h3>}
        </div>
    );
}