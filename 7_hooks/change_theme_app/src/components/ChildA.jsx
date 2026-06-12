import React from 'react'
import { useContext } from 'react';
import { MyTheme } from '../App';

const ChildA = () => {
    const {theme,setTheme}=useContext(MyTheme);

    function toggleTheme(){
        theme==='light'? setTheme('dark'):setTheme('light');
    }

  return (
    <div>
        <button className="btn btn-success" onClick={toggleTheme}>
            Change Theme
        </button>
    </div>
  )
}

export default ChildA