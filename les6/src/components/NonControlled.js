import {createRef} from "react";

export default function NonControlled() {
let value1 = createRef()


    function submit(e) {
        e.preventDefault();
        console.log(e.target.postId.value);
        console.log(value1.current.value);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="number" name={'postId'} placeholder={'Enter a number from 1 to 100'} ref={value1}/>
                <button>Send</button>
            </form>
        </div>
    );
}