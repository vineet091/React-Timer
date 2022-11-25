import { useEffect, useRef, useState } from "react";
import "./styles.css";
import Timer from "./Timer";
// timer, play, pause, reset
// global reset, play, pause

export default function App() {
  const Timer1_ID = useRef(null);
  const Timer2_ID = useRef(null);
  const Timer3_ID = useRef(null);
  const [timer1, setTimer1] = useState(60);
  const [timer2, setTimer2] = useState(60);
  const [timer3, setTimer3] = useState(60);

  const startTimer = (callback2, timerId) => {
    timerId.current = setInterval(
      (callback1) => {
        callback1((time) => {
          if (time >= 1) {
            return time - 1;
          } else {
            clearInterval(timerId.current);
            return 0;
          }
        });
      },
      1000,
      callback2
    );
  };

  useEffect(() => {
    startTimer(setTimer1, Timer1_ID);
    startTimer(setTimer2, Timer2_ID);
    startTimer(setTimer3, Timer3_ID);
    return () => {
      clearInterval(Timer1_ID?.current);
      clearInterval(Timer2_ID?.current);
      clearInterval(Timer3_ID?.current);
    };
  }, []);

  const clearTimer = () => {};

  const onPause = (timerID) => {
    if (timerID) {
      console.log(timerID);
      clearInterval(timerID.current);
    } else {
      clearInterval(Timer1_ID?.current);
      clearInterval(Timer2_ID?.current);
      clearInterval(Timer3_ID?.current);
    }
  };
  const onPlay = (callbackFn, timerID) => {
    if (timerID) {
      if (timerID?.current) {
        console.log(timerID);
        startTimer(callbackFn, timerID);
      }
    } else {
      startTimer(setTimer1, Timer1_ID);
      startTimer(setTimer2, Timer2_ID);
      startTimer(setTimer3, Timer3_ID);
    }
  };
  const onReset = (callbackFn, timerID) => {
    if (timerID) {
      // if (timerID.current) {
      //   clearInterval(timerID.current);
      // }
      callbackFn(60);
      console.log(timerID);
      // startTimer(callbackFn, timerID);
    } else {
    }
  };
  return (
    <div className="App">
      <div className="g-actions">
        <button className="btn" type="button" onClick={() => onPlay()}>
          Play All
        </button>
        |
        <button className="btn" type="button" onClick={() => onPause()}>
          Pause All
        </button>
        |
        <button className="btn" type="button" onClick={() => onReset()}>
          Reset All
        </button>
      </div>
      <Timer
        id="1"
        timer={timer1}
        onPause={onPause}
        onPlay={onPlay}
        onReset={onReset}
        timerID={Timer1_ID}
        setTimer={setTimer1}
      />
      <Timer
        id="2"
        timer={timer2}
        onPause={onPause}
        onPlay={onPlay}
        onReset={onReset}
        setTimer={setTimer2}
        timerID={Timer2_ID}
      />
      <Timer
        id="3"
        timer={timer3}
        onPause={onPause}
        onPlay={onPlay}
        onReset={onReset}
        timerID={Timer3_ID}
        setTimer={setTimer3}
      />
    </div>
  );
}
