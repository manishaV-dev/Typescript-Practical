import { useReducer } from "react";
import { counterReducer, initialState } from "./reducer";

function ReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count : {state.count} </h2>
      <h2>Status : {state.status} </h2>

      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>{" "}
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>{" "}
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => dispatch({ type: "setStatus", payload: "active" })}
        >
          Set status to active
        </button>{" "}
        <button
          onClick={() => dispatch({ type: "setStatus", payload: "inactive" })}
        >
          Set status to inactive
        </button>
      </div>
    </div>
  );
}

export default ReducerComponent;
