import {useEffect, useState} from "react";

export default function UserReqDetails(props) {
    let [user, setUser] = useState(null);
    let {match: {params: {id}}} = props;
    let {location: {state}} = props;
    console.log(props);
    // useEffect(() => {
    //     fetch('https://reqres.in/api/users/' + id)
    //         .then(value => value.json())
    //         .then(value => {
    //             setUser([value.data.id, value.data.first_name, value.data.last_name]);
    //         });
    //
    // }, [id])
    useEffect(() => {
                setUser(state);
                // завдяки state  не робимо додатковий запит на сервак
    }, [id])
    return (
        <div>
            {/*{user && <h4>{user[0]} - {`${user[1]} ${user[2]}`}</h4>}*/}
            {user && <h4>{user.id} - {`${user.first_name} ${user.last_name}`}</h4>}
        </div>
    );
}