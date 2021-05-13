import {Link} from "react-router-dom";

export default function Cast({item, url}) {
    return (
        <div>
            {item.id} - {item.name} - {item.bio.url}
            <Link to={url+'/'+ item.id}>    Details</Link>
        </div>
    );
}