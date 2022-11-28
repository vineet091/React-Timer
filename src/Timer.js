import { useEffect, useRef, useState } from "react";
import "./styles.css";

const Timer = ({ id, currentState }) => {
  const Timer_ID = useRef(null);
  const [timer, setTimer] = useState(60);

  const startTimer = () => {
    Timer_ID.current = setInterval(
      (callback1) => {
        callback1((time) => {
          if (time >= 1) {
            return time - 1;
          } else {
            clearInterval(Timer_ID.current);
            Timer_ID.current = null;
            return 0;
          }
        });
      },
      1000,
      setTimer
    );
  };

  useEffect(() => {
    if (currentState === 1) {
      startTimer();
    }
    return () => {
      clearInterval(Timer_ID?.current);
    };
  }, []);

  useEffect(() => {
    if (currentState === 1) {
      onPlay();
    }
    if (currentState === 2) {
      onPause();
    }
    if (currentState === 3) {
      onReset();
    }
  }, [currentState]);

  const onPause = () => {
    clearInterval(Timer_ID.current);
    Timer_ID.current = null;
  };
  const onPlay = () => {
    if (!Timer_ID?.current) {
      startTimer();
    }
  };

  const onReset = () => {
    setTimer(60);
  };

  return (
    <div>
      <h2>{`Timer ${id}`}</h2>
      <div>{timer}</div>
      <div>
        <button className="btn" type="button" onClick={() => onPlay()}>
          Play
        </button>
        |
        <button className="btn" type="button" onClick={() => onPause()}>
          Pause
        </button>
        |
        <button className="btn" type="button" onClick={() => onReset()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
