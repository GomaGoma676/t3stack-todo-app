import { trpc } from "../utils/trpc";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const { data, isLoading, error } = trpc.todo.getTasks.useQuery();
  if (isLoading) {
    return <p>Loading task list...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <ul>
      {data?.map((task) => (
        <TaskItem
          key={task.id}
          taskId={task.id}
          title={task.title}
          body={task.body}
        />
      ))}
    </ul>
  );
};
