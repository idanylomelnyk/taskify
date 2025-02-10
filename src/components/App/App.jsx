import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import TrashPage from "../../pages/TrashPage/TrashPage";

export default function App() {
  const tasksToState = JSON.parse(localStorage.getItem("tasks")) || [];
  const tasksInTrashToState =
    JSON.parse(localStorage.getItem("tasksInTrash")) || [];

  const [tasks, setTasks] = useState(tasksToState);
  const [taskInTrash, setTaskInTrash] = useState(tasksInTrashToState);

  useEffect(() => {
    const stateToStorage = JSON.stringify(tasks);
    localStorage.setItem("tasks", stateToStorage);
  }, [tasks]);

  useEffect(() => {
    const stateToStorage = JSON.stringify(taskInTrash);
    localStorage.setItem("tasksInTrash", stateToStorage);
  }, [taskInTrash]);

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Navigation />
        <Container maxWidth='false'>
          <Routes>
            <Route
              path='/'
              element={
                <HomePage
                  tasks={tasks}
                  setTasks={setTasks}
                  setTaskInTrash={setTaskInTrash}
                />
              }
            />
            <Route
              path='/trash'
              element={
                <TrashPage
                  taskInTrash={taskInTrash}
                  setTaskInTrash={setTaskInTrash}
                  setTasks={setTasks}
                />
              }
            />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

// {
//   id: nanoid(),
//   title: "My first task",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis culpa voluptate ipsum a vel sapiente?",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My second task",
//   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My third task",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis culpa voluptate.",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My forth task",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis culpa voluptate ipsum.",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My fifth task",
//   description: "Lorem ipsum dolor sit amet consectetur.",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My sixth task",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis culpa voluptate ipsum a vel sapiente?",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My seventh task",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi, itaque voluptatibus vero animi nam laudantium ut fugit neque atque quia explicabo ex earum alias enim odit vel officia nesciunt?",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My eighth task",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi.",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My nineth task",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi, itaque voluptatibus vero.",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My tenth task",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi, itaque voluptatibus vero animi nam laudantium ut.",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My eleventh task",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi, itaque voluptatibus vero animi nam laudantium ut fugit neque atque quia.",
//   complete: false,
// },
// {
//   id: nanoid(),
//   title: "My twelfth task",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi, itaque voluptatibus vero animi nam laudantium ut fugit neque atque quia explicabo ex earum alias enim odit vel officia nesciunt?",
//   complete: false,
// },
