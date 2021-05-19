import {useEffect, useState} from "react";
import UserReqres from "../user/UserReqres";
import App from "../../App";

export default function UsersReqres(props) {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(value => value.json())
            .then(value => {
                setUsers((value.data));
                console.log(value.data);
            });

    }, [])

    return (

        <div>

            {
                users.map(value => <div key={value.id}>
                    <p>
                        <strong>{`${value.first_name} ${value.last_name}`}</strong>
                    </p>
                    <p>{value.email}</p>
                    <img key={value.avatar} src={value.avatar}/>
                </div>)
            }

        </div>

    );
}