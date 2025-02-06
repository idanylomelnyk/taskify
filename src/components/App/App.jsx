import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";

export default function App() {
  const tasksToState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(tasksToState);

  useEffect(() => {
    const stateToStorage = JSON.stringify(tasks);
    localStorage.setItem("tasks", stateToStorage);
  }, [tasks]);

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Navigation />
        <Container maxWidth='false'>
          <Routes>
            <Route
              path='/'
              element={<HomePage tasks={tasks} setTasks={setTasks} />}
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
