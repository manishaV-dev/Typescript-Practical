import "./App.css";
// import StateComponent from "./topics/03-state";
// import EventComponent from "./topics/04-event";
import Component from "./topics/05-challenge";
// import Component from "./topics/02-props";

function App() {
  return (
    <>
      {/* This is from 02-props 

      <Component name="Manisha" id={56}>
        This is for children props
      </Component>
      <Component name="Radha" id={85} />

      */}

      {/* <StateComponent /> */}
      {/* <EventComponent /> */}
      <Component type="advanced" name="Manisha" email="manisha@gmail.com" />
      <Component type="basic" name="Kajal" />
    </>
  );
}

export default App;
