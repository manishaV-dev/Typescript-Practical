import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import type { Task } from "./types";

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(tasks: Task[]): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function TaskComponent() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  // using here map, if the Id matches the task ID I want to set the task is completed
  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);

  return (
    <>
      <section>
        <Form addTask={addTask} />
        <List tasks={tasks} toggleTask={toggleTask} />
      </section>
    </>
  );
}

export default TaskComponent;
