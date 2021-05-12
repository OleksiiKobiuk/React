import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function App() {
    return (
        <Router>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/foo'}>foo</Link>


        </div>
        </Router>
    );
}
