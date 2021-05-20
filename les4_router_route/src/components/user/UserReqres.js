import {
    Link
} from 'react-router-dom';

export default function UserReqres({item, url}) {
    let name = `${item.first_name} ${item.last_name}`;
    return (
        <div>
            <p>
                <Link to={url+'/' + item.id}> {name}</Link>
            </p>
            <p>{item.email}</p>
            <img key={item.avatar} src={item.avatar}/>
        </div>
    );
}