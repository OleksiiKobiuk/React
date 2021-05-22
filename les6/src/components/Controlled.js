import {useState} from "react";

export default function Controlled() {
    // let[initText, setText] = useState('');
    //
    // function onValueChange(e) {
    //     let value = e.target.value;
    //     setText(value);
    //     console.log(value)
    // }

    let [formState, setFormState] = useState({initText: '', password: '', postId: ''});
    let {initText, password, postId} = formState;

    let onValueChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormState({...formState, [name]:value});
        // console.log ({[name]:value});
    }

    let submit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="number" name={'postId'} value={postId} onChange={onValueChange} min="1" max="100"/>
                <input type="text" name={'anyText'} value={initText} onChange={onValueChange}/>
                <input type="text" name={'password'} value={password} onChange={onValueChange}/>
                <button>Submit</button>
            </form>

        </div>
    );
}