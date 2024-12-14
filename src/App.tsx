import "./App.css";
import Component from "./topics/02-props";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Component name="Manisha" id={56}>
        This is for children props
      </Component>
      <Component name="Radha" id={85} />
    </>
  );
}

export default App;
