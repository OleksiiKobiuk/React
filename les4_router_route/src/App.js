// /Беремо цю апі - https://reqres.in/
// з неї використовувати тільки get запити на list users та single user.
// На головній сторінці є роут який одразу відображає  користувачів.
// (Зауважте, що апі не віддає всіх користувачів,а має queryParametr/serach
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
    let[initPage,setPage] = useState(1);
    return (
        <Router>
            <div>
                <Link to={'/'}>Home</Link>
                <br/>
                <button onClick={() => setPage(initPage = 1)}> Prev page</button>
                {console.log(initPage)}
                <Link to={{pathname: '/users', search: '?page='+initPage}}>UsersReqres</Link>
                {/*<Link to={'/users'}>UsersReqres</Link>*/}
                <button onClick={() => setPage(initPage = 2)}> Next page</button>
                {console.log(initPage)}
                <hr/>
                {/*<Link to={{pathname: '/users', search: '?page=1'}}>Users</Link>*/}
                {/*<br/>*/}
                <Link to={'/posts'}>Posts</Link>
                <br/>
                <Link to={'/posts_with_reducer'}>Posts_with_reducer</Link>
                <br/>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    {/*<Route exact path={'/users'} component={Users}/>*/}
                    {/*<Route path={'/users?page=1'} component={UsersReqres}/>*/}
                    <Route path={'/users'} component={UsersReqres}/>
                    <Route path={'/posts'} component={Posts}/>
                    {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
                    <Route path={'/posts_with_reducer'} component={Posts_using_reducer}/>
                    {/*/!*<Route path={'/posts'} render={() => <Posts/>}/>*!/ чомусь не було історії?*/}
                </Switch>
            </div>
        </Router>
    );
}
