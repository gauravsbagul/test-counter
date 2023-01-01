import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => setCount(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={isRunning ? handlePause : handleStart}>
        {isRunning ? "Pause" : "Start"}
      </button>
      {count > 0 && !isRunning ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
};

export default App;
