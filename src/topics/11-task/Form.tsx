import { useState } from "react";
import type { Task } from "./types";

type FormProps = {
  addTask: (task: Task) => void;
};

function Form({ addTask }: FormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a task");
      return;
    }
    // console.log(text);

    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isComplete: false,
    });

    // add task
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Form;

// controlled input means that form  have state
