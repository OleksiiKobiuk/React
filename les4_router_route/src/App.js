// Беремо цю апі -https://sampleapis.com/api-list/futurama.
// Головна сторінка - 2 роути на персонажів та інвентар.
// При кліку на відповідний роут - перехід на сторінку
// зі списком персонажів/інвентаря (коротка інформація)
// При кліку на конкрентний елемент - перехід на сторінку
// цього елементу з детальною інформацією.
// З урахуванням того,
// що апі не надає можливості отримати поодинокі об'єкит,
// продумайте,як ви будете діставати їх на окремій сторінці з деталями. - API уже все надає

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
import Casts from "./components/casts/Casts";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>Home</Link>
                <br/>
                <Link to={'/users'}>Users</Link>
                <br/>
                <Link to={'/posts'}>Posts</Link>
                <br/>
                <Link to={'/cast'}>Cast from Futurama</Link>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    <Route exact path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/cast'} component={Casts}/>
                    <Route path={'/users/:id'} component={UserDetails}/>
                    {/*/!*<Route path={'/posts'} render={() => <Posts/>}/>*!/ чомусь не було історії?*/}
                </Switch>
            </div>
        </Router>
    );
}
