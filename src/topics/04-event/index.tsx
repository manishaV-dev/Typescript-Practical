import React, { useState } from "react";

function EventComponent() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <div>
      <h3>Event Example</h3>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input type="email" value={email} onChange={handleChange} />

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
