import {Link} from 'react-router-dom';

export default function UserReqres({item, url}) {
    let name = `${item.first_name} ${item.last_name}`;
    return (
        <div>
            <p>
                {/*<Link to={url+'/' + item.id}> {name}</Link>*/}
                <Link to= {{pathname: url+'/' + item.id, state: item}}> {name}</Link>
                {/*розкриває додатково і об'єкт state з даними про юзера,
                встановлюючи в props в location в об'єкт state значення з item  */}
            </p>
            <p>{item.email}</p>
            <img key={item.avatar} src={item.avatar}/>
        </div>
    );
}