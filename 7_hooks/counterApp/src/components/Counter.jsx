import './Counter.css'
import { useState } from "react"
const Counter=()=>{
    const[count,setState]= useState(0);
    return(
        <>
        <p id='heading'> Counter App</p>
        <div className="btn-container">
          <button id='increment' className="btn btn-success  btn" onClick={()=>{setState(count+1)}}>+</button>
          <p id='reuslt'>You clicked {count} times</p>
          <button id='decrement' className="btn btn-success  btn" onClick={()=>{setState(count-1)}}>-</button>
          <button id='reset' className='btn btn-success   btn' onClick={()=>{setState(0)}}>Reset</button>
        </div>
      </>
    )
}
export default Counter