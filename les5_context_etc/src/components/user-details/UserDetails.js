// import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
export default function UserDetails(props) {
    // let params = useParams();
    // console.log(props);
    let {match: {params: {id}}} = props;
    let[user,setUser] = useState(null); //передаємо 1 юзера
    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser({...value});
            });
    }, [user])
    return (
        <div>
            {user && <h3>{user.id} - {user.name}: {user.email}</h3>}
        </div>
    );
}