import { Card, ListItem, Typography } from "@mui/material";
import TaskActionsButton from "../TaskActionsButton/TaskActionsButton";
import TaskModal from "../TaskModal/TaskModal";
import { useState } from "react";

export default function TaskItem({
  id,
  title,
  description,
  complete,
  bgColor,
  tasks,
  setTasks,
  setTaskInTrash,
}) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setIsTaskEditing(false);
  };

  const [isTaskEditing, setIsTaskEditing] = useState(false);
  const [editTaskText, setEditTaskText] = useState({
    title: "",
    description: "",
  });

  const editingTask = () => {
    setEditTaskText({ title, description });
  };

  return (
    <ListItem
      disablePadding
      sx={{ position: "relative", flexBasis: "calc(1587px/5)" }}
    >
      <Card
        onClick={handleOpenModal}
        variant='outlined'
        sx={{
          width: "calc(1587px/5)",
          height: 140,
          bgcolor: bgColor,
          padding: 2,
          cursor: "default",

          "&:hover": {
            boxShadow: 2,
          },
          "&:hover .moreVert": { opacity: 1 },
        }}
      >
        <TaskActionsButton
          id={id}
          complete={complete}
          tasks={tasks}
          setTasks={setTasks}
          isTaskEditing={isTaskEditing}
          setIsTaskEditing={setIsTaskEditing}
          editingTask={editingTask}
          setTaskInTrash={setTaskInTrash}
        />
        <Typography
          sx={{
            fontWeight: 700,
            color: complete ? "#bdbdbd" : "#000",
            textDecoration: complete ? "line-through" : "none",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            color: complete ? "#bdbdbd" : "#000",
            textDecoration: complete ? "line-through" : "none",
          }}
        >
          {description}
        </Typography>
      </Card>
      <TaskModal
        id={id}
        title={title}
        description={description}
        bgColor={bgColor}
        complete={complete}
        setTasks={setTasks}
        open={openModal}
        onClose={handleCloseModal}
        isTaskEditing={isTaskEditing}
        setIsTaskEditing={setIsTaskEditing}
        editTaskText={editTaskText}
        setEditTaskText={setEditTaskText}
        editingTask={editingTask}
      />
    </ListItem>
  );
}
