import {useEffect, useState} from "react";
import Cast from "../cast/Cast";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import CastDetails from "../cast/CastDetails";

export default function Casts(props) {
let {match: {url}} = props;
    let[casts, setCasts] = useState([]);
    useEffect(() =>{
        fetch('https://api.sampleapis.com/futurama/cast')
            .then(value => value.json())
            .then(value => {
               setCasts([...value]);
            });
    }, []);
    return (
        <div>
            {
                casts.map(value => <Cast key={value.id} item={value} url={url}/>)
            }
            <Switch>
                <Route path={'/cast/:id'} component={CastDetails}/>
            </Switch>
        </div>
    );
}