import { List } from "@mui/material";
import RemovedTaskItem from "../../components/RemovedTaskItem/RemovedTaskItem";

export default function TrashPage({ taskInTrash, setTaskInTrash, setTasks }) {
  return (
    <>
      <List
        disablePadding
        sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}
      >
        {taskInTrash.map(({ id, title, description, complete, bgColor }) => (
          <RemovedTaskItem
            key={id}
            id={id}
            title={title}
            description={description}
            complete={complete}
            bgColor={bgColor}
            taskInTrash={taskInTrash}
            setTaskInTrash={setTaskInTrash}
            setTasks={setTasks}
          />
        ))}
      </List>
    </>
  );
}
