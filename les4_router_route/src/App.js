// /Беремо цю апі - https://reqres.in/
// з неї використовувати тільки get запити на list users та single user.
// На головній сторінці є роут який одразу відображає  користувачів.
// (Зауважте, що апі не віддає всіх користувачів,а має queryParametr/search
// з назвою page, який характеризує пагінацію, та віддає по 10 об'єктів за один запит).
// Внизу є 2 кнопки, при натисканні на які ви ідете до наступної/попередньої сторінки, змінюючи page параметр.
// При кліку на користувача відбувається перехід на сторінку з детальною інформацією користувача

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import UserDetails from "./components/user-details/UserDetails";
import Posts_using_reducer from "./components/posts/Posts_using_reducer";
import UsersReqres from "./components/users/UsersReqres";
import {useState} from "react";

export default function App() {
    let [initPage, setPage] = useState(1);
    const handlePrev = () => {
        setPage(initPage = 1);
    }
    const handleNext = () => {
        setPage(initPage = 2);
    }
    return (
        <Router>
            <div>
                <Switch>
                    {/*<Route exact path={'/users'} component={Users}/>*/}
                    {/*<Route path={'/users?page=1'} component={UsersReqres}/>*/}
                    <Route path={'/users'} component={UsersReqres}/>
                    {/*<Route path={'/posts'} component={Posts}/>*/}
                    {/*/!*<Route path={'/users/:id'} component={UserDetails}/>*!/*/}
                    {/*<Route path={'/posts_with_reducer'} component={Posts_using_reducer}/>*/}
                    {/*/!*<Route path={'/posts'} render={() => <Posts/>}/>*!/ чомусь не було історії?*/}
                </Switch>
                 <hr/>
                {/*<button onClick={handlePrev}> Prev page</button>*/}
                {UsersReqres}
                <Link onClick={handlePrev} to={{pathname: '/users', search: '?page=' + initPage}}
                    style={{marginRight: '10px'}}>Prev page</Link>
                <Link onClick={handleNext} to={{pathname: '/users', search: '?page=' + initPage}}>Next page</Link>
                <hr/>
                {/*<Link to={{pathname: '/users', search: '?page=1'}}>UsersReqres</Link>*/}
                {/*<Link to={'/users'}>UsersReqres</Link>*/}
                <hr/>
                {/*<Link to={{pathname: '/users', search: '?page=1'}}>Users</Link>
                <br/>
                <Link to={'/posts'}>Posts</Link>
                <br/>
                <Link to={'/posts_with_reducer'}>Posts_with_reducer</Link>
                <br/>*/}
            </div>
        </Router>
    );
}
