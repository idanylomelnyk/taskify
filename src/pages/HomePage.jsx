import { Box, Button, TextField, Typography } from "@mui/material";
import TaskList from "../components/TaskList/TaskList";
import { useState } from "react";
import { nanoid } from "nanoid";
import NewTaskForm from "../components/NewTaskForm/NewTaskForm";
import NoTasksNotice from "../components/NoTasksNotice/NoTasksNotice";

export default function HomePage() {
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      title: "My first task",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis culpa voluptate ipsum a vel sapiente?",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My second task",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My third task",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis culpa voluptate.",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My forth task",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis culpa voluptate ipsum.",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My fifth task",
      description: "Lorem ipsum dolor sit amet consectetur.",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My sixth task",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis culpa voluptate ipsum a vel sapiente?",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My seventh task",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi, itaque voluptatibus vero animi nam laudantium ut fugit neque atque quia explicabo ex earum alias enim odit vel officia nesciunt?",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My eighth task",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi.",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My nineth task",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi, itaque voluptatibus vero.",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My tenth task",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi, itaque voluptatibus vero animi nam laudantium ut.",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My eleventh task",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi, itaque voluptatibus vero animi nam laudantium ut fugit neque atque quia.",
      complete: false,
    },
    {
      id: nanoid(),
      title: "My twelfth task",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi, itaque voluptatibus vero animi nam laudantium ut fugit neque atque quia explicabo ex earum alias enim odit vel officia nesciunt?",
      complete: false,
    },
  ]);

  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
  const handleOpenNewTaskModal = () => setOpenNewTaskModal(true);
  const handleCloseNewTaskModal = () => setOpenNewTaskModal(false);

  return (
    <Box component='main' sx={{ padding: "24px 0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          aria-label='open-new-task-form'
          variant='contained'
          onClick={handleOpenNewTaskModal}
        >
          New task
        </Button>
        <TextField variant='standard' label='Search'></TextField>
      </Box>
      <NewTaskForm
        open={openNewTaskModal}
        onClose={handleCloseNewTaskModal}
        setTasks={setTasks}
      />
      {tasks.length === 0 ? (
        <NoTasksNotice />
      ) : (
        <TaskList tasks={tasks} setTasks={setTasks} />
      )}
    </Box>
  );
}
