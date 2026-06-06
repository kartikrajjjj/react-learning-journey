import { useState } from "react";
import './ShowHide.css'
const ShowHide = () => {
  const [show, change] = useState(true);

  return (
       <div className="main"> 
       <p id='heading'>Click button to hide or show text</p>
      {show && <p id='text'>Hello Kartik</p>}

      <button className="btn"
        onClick={() => {
          change(!show);
        }}
      >
        Hide/Show
      </button>
      </div>
    
  );
};

export default ShowHide;