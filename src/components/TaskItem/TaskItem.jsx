import { Card, Checkbox, ListItem, Typography } from "@mui/material";
import TaskActionsButton from "../TaskActionsButton/TaskActionsButton";
import TaskModal from "../TaskModal/TaskModal";
import { useState } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function TaskItem({
  id,
  title,
  description,
  complete,
  bgColor,
  tasks,
  setTasks,
  setTaskInTrash,
  checkedId,
  setCheckedId,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [isTaskEditing, setIsTaskEditing] = useState(false);
  const [editTaskText, setEditTaskText] = useState({
    title: "",
    description: "",
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setIsTaskEditing(false);
  };

  const editingTask = () => {
    setEditTaskText({ title, description });
  };

  const selectedTasks = () => {
    setCheckedId((prev) => {
      return prev.includes(id)
        ? prev.filter((key) => key !== id)
        : [...prev, id];
    });
  };

  return (
    <ListItem
      disablePadding
      sx={{
        position: "relative",
        flexBasis: "calc((1652px - 64px) / 5)",
      }}
    >
      <Card
        onClick={handleOpenModal}
        variant='outlined'
        sx={{
          width: "calc((1652px - 64px) / 5)",
          height: 140,
          bgcolor: bgColor,
          padding: 2,
          cursor: "default",

          "&:hover": {
            boxShadow: 2,
          },
          "&:hover .moreVert": { opacity: 1 },
          "&:hover .checkbox": { opacity: 1 },
        }}
      >
        <Checkbox
          checked={checkedId.includes(id)}
          onChange={selectedTasks}
          onClick={(e) => e.stopPropagation()}
          className='checkbox'
          icon={
            <RadioButtonUncheckedIcon
              sx={{
                backgroundColor: bgColor,
                borderRadius: "50%",
              }}
            />
          }
          checkedIcon={<CheckCircleIcon sx={{ color: "#000" }} />}
          sx={{
            position: "absolute",
            top: -16,
            left: -16,
            opacity: checkedId.includes(id) ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
        <TaskActionsButton
          id={id}
          title={title}
          description={description}
          complete={complete}
          tasks={tasks}
          setTasks={setTasks}
          isTaskEditing={isTaskEditing}
          setIsTaskEditing={setIsTaskEditing}
          editingTask={editingTask}
          setTaskInTrash={setTaskInTrash}
          setCheckedId={setCheckedId}
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
