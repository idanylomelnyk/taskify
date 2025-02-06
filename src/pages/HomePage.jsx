import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

import TaskList from "../components/TaskList/TaskList";
import NewTaskForm from "../components/NewTaskForm/NewTaskForm";
import NoTasksNotice from "../components/NoTasksNotice/NoTasksNotice";

export default function HomePage({ tasks, setTasks }) {
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
  const handleOpenNewTaskModal = () => setOpenNewTaskModal(true);
  const handleCloseNewTaskModal = () => {
    setOpenNewTaskModal(false);
    setBgColorSelected("#fff");
  };

  const [bgColorSelected, setBgColorSelected] = useState("#fff");

  const [query, setQuery] = useState("");
  const handleSearch = (e) => setQuery(e.target.value);
  const filteredTasks = () => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description.toLowerCase().includes(query.toLowerCase())
    );
  };

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
        <TextField
          variant='standard'
          label='Search'
          value={query}
          onChange={handleSearch}
        ></TextField>
      </Box>
      <NewTaskForm
        open={openNewTaskModal}
        onClose={handleCloseNewTaskModal}
        setTasks={setTasks}
        bgColorSelected={bgColorSelected}
        setBgColorSelected={setBgColorSelected}
      />
      {tasks.length === 0 ? (
        <NoTasksNotice />
      ) : (
        <TaskList tasks={filteredTasks()} setTasks={setTasks} />
      )}
    </Box>
  );
}
