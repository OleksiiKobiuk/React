import {Link} from "react-router-dom";

export default function User({item, url}) {
    return (
        <div>
            {item.name}
            <Link to={{pathname:`${url}/${item.id}`, state: item}}>   Details</Link>
        </div>
    );
}