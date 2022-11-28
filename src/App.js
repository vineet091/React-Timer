import { useState } from "react";
import "./styles.css";
import Timer from "./Timer";

export default function App() {
  const [currentState, setCurrentState] = useState(1);

  return (
    <div className="App">
      <div className="g-actions">
        <button
          className="btn"
          type="button"
          onClick={() => setCurrentState(1)}
        >
          Play All
        </button>
        |
        <button
          className="btn"
          type="button"
          onClick={() => setCurrentState(2)}
        >
          Pause All
        </button>
        |
        <button
          className="btn"
          type="button"
          onClick={() => setCurrentState(3)}
        >
          Reset All
        </button>
      </div>
      <Timer key={`timer-1`} id="1" currentState={currentState} />
      <Timer key={`timer-2`} id="2" currentState={currentState} />
      <Timer key={`timer-3`} id="3" currentState={currentState} />
    </div>
  );
}
