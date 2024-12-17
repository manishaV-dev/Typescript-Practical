function ReduxToolkitComponent() {
  return (
    <div>
      <div>Redux Toolkit (RTK)</div>

      <div>
        <button onClick={() => console.log("increment")}>Increment</button>{" "}
        <button onClick={() => console.log("Decrement")}>Decrement</button>{" "}
        <button onClick={() => console.log("Reset")}>Reset</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => console.log("active")}>
          Set status to active
        </button>{" "}
        <button onClick={() => console.log("inactive")}>
          Set status to inactive
        </button>
      </div>
    </div>
  );
}

export default ReduxToolkitComponent;
