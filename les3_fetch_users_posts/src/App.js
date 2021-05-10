// отримати данні про пости з jsonplaceholder ,
// та відобразити в компоненті posts.
// За рендер окремого поста відповідатиме компонент Post .
// В компоненті поста повинна бути кнопка,
// при кліку на яку поруч зі списком всіх постів з'являється обраний пост і його деталі.


import './App.css'
import Users from "./components/users/Users";

export default function App() {
    return (
        <div>
            <Users/>
        </div>
    );
}