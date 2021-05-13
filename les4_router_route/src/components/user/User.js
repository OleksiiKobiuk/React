import {Link} from "react-router-dom";

export default function User({item, url}) {
    return (
        <div>
            {item.name}
            <Link to={url+'/' + item.id}>   Details</Link>
        </div>
    );
}