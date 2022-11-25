import "./styles.css";

const Timer = ({ id, timer, onReset, onPause, onPlay, timerID, setTimer }) => {
  return (
    <div>
      <h2>{`Timer ${id}`}</h2>
      <div>{timer}</div>
      <div>
        <button
          className="btn"
          type="button"
          onClick={() => onPlay(setTimer, timerID)}
        >
          Play
        </button>
        |
        <button className="btn" type="button" onClick={() => onPause(timerID)}>
          Pause
        </button>
        |
        <button
          className="btn"
          type="button"
          onClick={() => onReset(setTimer, timerID)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
