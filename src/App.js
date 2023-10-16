import React, { useEffect, useState } from "react";
import "./styles.css";

function MaxCount() {
  const [counter, setCounter] = useState(5);
  const [noOfClicks, setNumberOfClicks] = useState(0);

  useEffect(() => {
    if (counter > 0) {
      const interval = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [counter]);

  const handleClick = () => {
    setNumberOfClicks((clicks) => clicks + 1);
  };

  return (
    <div className="container">
      <div className="heading">Number of click before time expires</div>
      <div className="box">
        <div className="clicks">{noOfClicks}</div>
        <div className="timer">Time Left: {counter} seconds</div>
        {counter ? (
          <button className="button" onClick={handleClick}>
            +1
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default MaxCount;
