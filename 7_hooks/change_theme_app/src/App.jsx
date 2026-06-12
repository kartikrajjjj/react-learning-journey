import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';


const MyTheme=createContext();
function App() {

  const [theme,setTheme]=useState('light');

  

  return (
    
      <div>
        <MyTheme.Provider value={{theme,setTheme}}>

          <div id='container' style={{backgroundColor: theme==='light' ? "beige" : "black"}}>
            <ChildA></ChildA>
          </div>
          
        </MyTheme.Provider>
      </div>
    
  )
}

export default App;
export {MyTheme};
