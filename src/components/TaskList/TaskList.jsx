import { List } from "@mui/material";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  tasks,
  setTasks,
  setTaskInTrash,
  checkedId,
  setCheckedId,
}) {
  return (
    <List
      disablePadding
      sx={{
        mt: 4,
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {tasks.map(({ id, title, description, complete, bgColor }) => (
        <TaskItem
          key={id}
          id={id}
          title={title}
          description={description}
          complete={complete}
          bgColor={bgColor}
          tasks={tasks}
          setTasks={setTasks}
          setTaskInTrash={setTaskInTrash}
          checkedId={checkedId}
          setCheckedId={setCheckedId}
        />
      ))}
    </List>
  );
}
