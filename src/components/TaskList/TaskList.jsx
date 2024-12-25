import { List } from "@mui/material";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ tasks, setTasks }) {
  return (
    <List sx={{ display: "flex", flexWrap: "wrap" }}>
      {tasks.map(({ id, title, description, complete }) => (
        <TaskItem
          key={id}
          id={id}
          title={title}
          description={description}
          complete={complete}
          setTasks={setTasks}
        />
      ))}
    </List>
  );
}
