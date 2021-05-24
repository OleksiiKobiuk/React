import './App.css';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";


const Counter = () => {
  const counterReact = useSelector((state) => state.counter)
  // const counterReact = useSelector(({counter}) => counter)   аналогічно до запису вище
  const dispatch = useDispatch();
return (
    <>
      <h1>Counter: {counterReact}</h1>
      <button onClick={()=> {dispatch({type:'INC'})}}>inc</button>
      <button onClick={()=> {dispatch({type:'DEC'})}}>dec</button>
      <button onClick={()=> {dispatch({type:'RESET'})}}>reset</button>
    </>

)
}
export default function App() {
    let[value, setValue] = useState(0);
    const dispatch = useDispatch();
    return (
        <div>
        <Counter/>
        <input type="number" value={value} onChange={({target: {value}}) => setValue(value)}/>
        <button onClick={()=> {dispatch({type:'INC_CUSTOM', payload: Number(value)})}}>Inc custom</button>
        </div>
    );
}
