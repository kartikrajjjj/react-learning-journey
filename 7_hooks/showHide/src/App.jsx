import { useState } from "react";

const ShowHide = () => {
  const [show, change] = useState(true);

  return (
    <>
      {show && <p>Hello Kartik</p>}

      <button
        onClick={() => {
          change(!show);
        }}
      >
        Hide/Show
      </button>
    </>
  );
};

export default ShowHide;