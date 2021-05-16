import {useEffect, useState} from "react";

export default function CastDetails(props) {
    let {match: {params: {id}}} = props;
    let[cast, setCast] = useState(null);
    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/cast/' + id)
            .then(value => value.json())
            .then(value => {
                setCast({...value});
            });
    }, [cast])
    return (
        <div>
            {cast && <h3>{cast.id} - {cast.name}: {cast.born}</h3>}
        </div>
    );
}