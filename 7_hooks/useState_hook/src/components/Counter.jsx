import { useState } from "react";
import './Counter.css'
const Counter=()=> {
    const [count,setState]= useState(0);
    return (
        <div className='container'>
       <p id='para'>You clicked {count} times</p>
       <button id='btn' onClick={()=>{ setState(count+1) }}>Click me</button>
       <button id='btn' onClick={()=>{setState(0)}}>Reset</button>
    </div>
    )
}
  export default Counter;