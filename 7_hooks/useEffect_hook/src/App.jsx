import "./App.css";
import Heading from "./components/Heading";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  function resetCount() {
    setCount(0);
  }

  function resetTimer() {
    setSeconds(0);
  }

  // Variation 1: Runs after every render
  useEffect(() => {
    console.log("Variation 1: Runs after every render");
  });

  // Variation 2: Runs only once after first render
  useEffect(() => {
    console.log("Variation 2: Runs only once");
  }, []);

  // Variation 3: Runs on first render and whenever count changes
  useEffect(() => {
    console.log("Variation 3: Count changed:", count);
  }, [count]);

  // Variation 4: Timer with Cleanup Function
  useEffect(() => {
    if (!isRunning) {
      return;
    }

    console.log("Timer Started");

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Cleanup Function Executed");
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <Heading />

      <p>Open Console to observe useEffect behavior</p>

      <hr />

      <h2>Counter Example</h2>

      <button onClick={handleClick}>
        Increment Count
      </button>

      <button onClick={resetCount}>
        Reset Count
      </button>

      <p>Count: {count}</p>

      <hr />

      <h2>Timer Example</h2>

      <button onClick={() => setIsRunning(true)}>
        Start Timer
      </button>

      <button onClick={() => setIsRunning(false)}>
        Stop Timer
      </button>

      <button onClick={resetTimer}>
        Reset Timer
      </button>

      <p>Timer: {seconds} seconds</p>

      <p>
        Status: {isRunning ? "Running" : "Stopped"}
      </p>
    </div>
  );
}

export default App;