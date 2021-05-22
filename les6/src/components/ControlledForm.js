import {useEffect, useState} from "react";

export default function ControlledForm() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    let [userId, setUserId] = useState();
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(value => {
                    setUsers([...value])
                });
    }, []);

    useEffect(() => {
        if(userId > 0) {
            fetch('https://jsonplaceholder.typicode.com/users/' + userId)
                .then(value => value.json())
                .then(value => {
                    setUser({...value});
                });
        }
    }, [userId]);

    function getUserDetails(e) {
        e.preventDefault();

    }

    function onSelect(e) {
        setUserId(e.target.value);

    }

    return (
        <div>
            <form onSubmit={getUserDetails}>
                <select name="user" onChange={onSelect}>
                    {
                        users.map(value => <option value={value.id}>{value.name}</option>)
                    }
                </select>
                <button>Details</button>
            </form>
            {user && <div> {JSON.stringify(user)} </div>}
        </div>
    );
}