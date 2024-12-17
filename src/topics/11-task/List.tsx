import type { Task } from "./types";

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

function List({ tasks, toggleTask }: ListProps) {
  return (
    <>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <p>{task.description}</p>
              <input
                type="checkbox"
                checked={task.isComplete}
                onChange={() => {
                  toggleTask({ id: task.id });
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
