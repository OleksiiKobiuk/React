import {useEffect, useState} from "react";

export default function UserReqDetails(props) {
    let [user, setUser] = useState(null);
    let {match: {params: {id}}} = props;
    console.log(props);
    useEffect(() => {
        fetch('https://reqres.in/api/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser([value.data.id, value.data.first_name, value.data.last_name]);
            });

    }, [id])
console.log(user);
    return (
        <div>
            {user && <h4>{user[0]} - {`${user[1]} ${user[2]}`}</h4>}
        </div>
    );
}