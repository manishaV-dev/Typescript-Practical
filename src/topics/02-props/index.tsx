import { type PropsWithChildren } from "react";

// function Component({ name, id }: { name: string; id: number }) {
//   return (
//     <>
//       <div>Props</div>

//       <h3>Name : {name} </h3>
//       <h3>Id : {id} </h3>

//       <p>
//         Props are essentially arguments that we pass in when we construct the
//         component we need to provide the type annotations in ts
//       </p>
//     </>
//   );
// }

// ---------------------------------------------------------
// another way to pass props if we have multiple props to pass -- by using type alias or interface

// here example of type alias

// type ComponentProps = { name: string; id: number };

// function Component({ name, id }: ComponentProps) {
//   return (
//     <>
//       <div>Passing inline Props</div>
//       <h3>Name : {name} </h3>
//       <h3>Id : {id} </h3>

//       <p>
//         Props are essentially arguments that we pass in when we construct the
//         component we need to provide the type annotations in ts
//       </p>

//       <p>
//         Special children prop which allows elements and components to be passed into another component
//       </p>
//     </>
//   );
// }

// ==============================================================

//  Pass children prop

// type ComponentProps = { name: string; id: number; children?: React.ReactNode };

// ------------------ Either we explicitly provide the value of react node ourselves 👆 or we can import propswithchildren 👇 which is essentially does the same thing behind the scene

type ComponentProps = PropsWithChildren<{ name: string; id: number }>;

// this👆means - type ComponentProps = {
//     name: string;
//     id: number;
// } & {
//     children?: React.ReactNode | undefined;
// }



function Component({ name, id, children }: ComponentProps) {
  return (
    <>
      <div>Passing inline Props</div>
      <h3>Name : {name} </h3>
      <h3>Id : {id} </h3>
      {children}

      <p>
        Special children prop which allows elements and components to be passed
        into another component
      </p>

      <p>ReactNode represents everything that can be rendered.</p>
      <p>children?: Make it optional</p>
    </>
  );
}

export default Component;

// Freecodecamp - Practical Typescript
