import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";
import ChildD from "./components/ChildD";
import Heading from "./components/Heading";

//step 1: create context
  const userContext = createContext();
  const userContext2 = createContext();
  // step 2: wrap all the child inside a provider who need to consume Context
  //step 3:pass value 
  //step 4: consume inside consumer


function App() {
  const [user,setUser]= useState({name:"Kartik"}); 
  const [ user2,setUser2]=useState({age:21});

  return (
    <>
      <div>
        <Heading></Heading>
        
        <userContext.Provider value={user}>
          <ChildA></ChildA>
        </userContext.Provider>
        <userContext2.Provider value={user2}>
          <ChildD></ChildD>
        </userContext2.Provider>
      </div>
    </>
  );
}

export default App;
export { userContext };
export {userContext2};
