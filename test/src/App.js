import logo from './logo.svg';
import './App.css';
import CharacterComponent from "./components/characters/characterComponent";

function App() {
    return (
        <div className="App">
<CharacterComponent description={'Model X'} image={'https://images.drive.ru/i/0/5f6c5369ec05c4fe2700000f.jpg'}/>
<CharacterComponent description={'Model C'} image={'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/tesla-model-s__986486-1920x1080x90.webp'}/>
<CharacterComponent description={'Model S'} image={'https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg'}/>
        </div>
    );
}

export default App;
