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
  const [tasksInTrash, setTasksInTrash] = useState(tasksInTrashToState);
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("tasksInTrash", JSON.stringify(tasksInTrash));
  }, [tasks, tasksInTrash]);

  const handleSearch = (e) => setQuery(e.target.value);

  const filteredTasks = (tasks) => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Navigation
          query={query}
          handleSearch={handleSearch}
          setTasks={setTasks}
        />
        <Container maxWidth={false}>
          <Routes>
            <Route
              path='/'
              element={
                <HomePage
                  query={query}
                  tasks={filteredTasks(tasks)}
                  setTasks={setTasks}
                  setTaskInTrash={setTasksInTrash}
                />
              }
            />
            <Route
              path='/trash'
              element={
                <TrashPage
                  tasksInTrash={filteredTasks(tasksInTrash)}
                  setTaskInTrash={setTasksInTrash}
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
