import { useState } from "react";

type Link = {
  id: number;
  text: string;
  url: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    text: "Some text",
    url: "Some URL",
  },
  {
    id: 2,
    text: "Some text 2",
    url: "Some URL 2",
  },
  {
    id: 3,
    text: "Some text 3",
    url: "Some URL3",
  },
];

function StateComponent() {
  const [text, setText] = useState("Hello");
  const [num, setNum] = useState(5);
  const [list, setList] = useState<string[]>([]);

  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2>React & Typescript</h2>
      <h3>State</h3>

      <button
        onClick={() => {
          //   setText("Hii");
          //   setNum(7);
          //   setList(["Hello world"]);
          setLinks([...links, { id: 4, text: "Manisha", url: "Yahoo" }]);
        }}
      >
        Click me
      </button>

      {/* <p>"<string[]> -- generics -- an array of string "</p> */}
    </div>
  );
}

export default StateComponent;
