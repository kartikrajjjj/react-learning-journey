import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./components/Heading";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  function handleClick() {
    alert("Button clicked :)");
  }

  function handleHover() {
    alert("Mouse hovered above paragraph #2.");
  }

  function handleInputChange(e) {
    console.log(`Input changed to: ${e.target.value} `);
  }

  function handleSubmit(e){
    e.preventDefault();
    //writing custom behaviour
    alert("Form submitted");
  }

  return (
    <div id="main">
      <Heading></Heading>
      
      <p>
        {" "}
        Will be using event handlers like: <br /></p>
        <ul>
          <li>onClick on #1-button</li>
          <li>onMouseOver on #2-paragraph</li>
          <li>onChange on #3-form</li>
        </ul>
      
      <span>#1:</span>
      <button id="btn" onClick={handleClick} className="btn btn-info">
        CLICK ME
      </button>
      <br />
      <span>#2:</span>
      <span id="para" onMouseOver={handleHover}>
         Hover mouse over me to get alert.
      </span>
      <br />
      <span>#3:</span>
      <form id="form" onSubmit={(e)=> handleSubmit(e)} >
        <span>Type and open inspect - console for output</span>
        <input type="text" placeholder="Enter text" onChange={handleInputChange}/>
        <button className="btn btn-success" id='btn' type="submit" >SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
