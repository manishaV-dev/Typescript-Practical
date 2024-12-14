//1
// function Component() {
//   return (
//     <div>index</div>
//   )
// }

// export default Component

//------------------------------------------------------

// Or you can implicitily write return
// function Component(): JSX.Element {
//     return (
//       <div>index</div>
//     )
//   }
//   export default Component

//------------------------------------------------------

function Component(): JSX.Element | string | null {
  return null;
  return "Hello World";
  return <div>index</div>;
}
export default Component;

//------------------------------------------------------
//------------------------------------------------------

/*
what are react component?
=> They are functions
=> Return jsx element


*/
