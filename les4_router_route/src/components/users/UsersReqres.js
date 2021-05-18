import {useEffect, useState} from "react";
import UserReqres from "../user/UserReqres";

export default function UsersReqres(props) {
    let [users, setUsers] = useState([]);
    console.log(props);
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            });
    }, [])

    return (

        <div>
            {
                users.map(value => <UserReqres key={value.data.id} item={value.data}/>)
            }

        </div>

    );
}