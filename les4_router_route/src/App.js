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

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>Home</Link>
                <br/>
                <Link to={'/users'}>users</Link>
                <br/>
                <Link to={'/posts'}>posts</Link>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    {/*/!*<Route path={'/posts'} render={() => <Posts/>}/>*!/ чомусь не було історії?*/}
                </Switch>
            </div>
        </Router>
    );
}
