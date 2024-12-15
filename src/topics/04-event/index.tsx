import React, { useState } from "react";

function EventComponent() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // const formData = new FormData(e.target as HTMLFormElement)

    const data = Object.fromEntries(formData)
    console.log(data);
    

  }

  return (
    <div>
      <h3>Event Example</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />

        <input type="email" value={email} onChange={handleChange} name="email" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EventComponent;

/*

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  -- React.ChangeEvent<HTMLInputElement> -- 

  -- ChangeEvent - ChangeEvent type is a generic its expecting a type which is going to be the HTML element 👆 (here the correct element is input element that why we are using HTMLInputElement) and default value is going to be element


  👇 - this you gonna find in index.d.ts -- when you hover on changeEvent 
        interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    

  now target that will the intersection type between the event target and the type we provide

*/
