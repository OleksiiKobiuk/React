import {useEffect, useState} from "react";
import UserReqres from "../user/UserReqres";
import {Route, Switch} from "react-router-dom";
import UserReqDetails from "../user-details/UserReqDetails";

export default function UsersReqres(props) {
    let [users, setUsers] = useState([]);
    let {location: {search}} = props;
    let {match: {url}} = props;

    useEffect(() => {
        fetch('https://reqres.in/api/users'+search)
            .then(value => value.json())
            .then(value => {
                setUsers([...value.data]);
            });

    }, [search])

    return (

        <div>
            <Switch>
                <Route path={'/users/:id'} component={UserReqDetails}/>
            </Switch>
            {
                users.map(value => <UserReqres key={value.id} item={value} url={url}/>)
            }

        </div>

    );
}