import {Link} from "react-router-dom";

export default function Post({item, url}) {
    return (
        <div>
            {item.id}-
            {item.title}
             <Link to={url+'/' + item.id}>   Details</Link>
        </div>
    );
}