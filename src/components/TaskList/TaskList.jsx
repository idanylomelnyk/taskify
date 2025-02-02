import { List } from "@mui/material";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ tasks }) {
  return (
    <List
      disablePadding
      sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}
    >
      {tasks.map(({ id, title, description }) => (
        <TaskItem key={id} title={title} description={description} />
      ))}
    </List>
  );
}
