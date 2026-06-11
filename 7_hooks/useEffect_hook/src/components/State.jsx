import { useState } from "react";
function State(){

    const [count,setCount]= useState(0);

    function handleClick(){
        setCount(count+1);
    }
    function Reset(){
        setCount(0);
    }
    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={Reset}>Reset</button>
            <p>Count: {count}</p>
        </div>
    )
}
export default State;