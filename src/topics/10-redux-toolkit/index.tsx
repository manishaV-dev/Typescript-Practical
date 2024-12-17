import {useAppDispatch, useAppSelector} from '../../hooks'
import {decrement,increment,reset,setStatus} from './counterSlice'


function ReduxToolkitComponent() {

 const {count, status} =  useAppSelector((state) => state.counter)
 const dispatch = useAppDispatch()

  return (
    <div>
      <div>Redux Toolkit (RTK)</div>
      <h2>Count : {count}</h2>
      <h3>Status : {status}</h3>

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>{" "}
        <button onClick={() => dispatch(decrement())}>Decrement</button>{" "}
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => dispatch(setStatus("active"))}>
          Set status to active
        </button>{" "}
        <button onClick={() => dispatch(setStatus("inactive"))}>
          Set status to inactive
        </button>
      </div>
    </div>
  );
}

export default ReduxToolkitComponent;
