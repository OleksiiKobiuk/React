import {Link} from "react-router-dom";

export default function Post({item, url}) {
    let name = 'Detail';
    return (
        <div>
            {item.id}-
            {item.title}
             <Link to={url+'/' + item.id}>   {name}</Link>
        </div>
    );
}