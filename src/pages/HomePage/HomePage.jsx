import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import TaskList from "../../components/TaskList/TaskList";
import NewTaskForm from "../../components/NewTaskForm/NewTaskForm";
import NoTasksNotice from "../../components/NoTasksNotice/NoTasksNotice";
import TasksFilter from "../../components/TasksFilter/TasksFilter";

export default function HomePage({ tasks, setTasks, setTaskInTrash }) {
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
  const handleOpenNewTaskModal = () => setOpenNewTaskModal(true);
  const handleCloseNewTaskModal = () => {
    setOpenNewTaskModal(false);
    setBgColorSelected("#fff");
  };

  const [bgColorSelected, setBgColorSelected] = useState("#fff");

  const [query, setQuery] = useState("");
  const handleSearch = (e) => setQuery(e.target.value);

  const [radioValue, setRadioValue] = useState("All");

  const filteredTasks = () => {
    return tasks
      .filter(
        (task) =>
          task.title.toLowerCase().includes(query.toLowerCase()) ||
          task.description.toLowerCase().includes(query.toLowerCase())
      )
      .filter((task) => {
        if (radioValue === "All") return true;
        if (radioValue === "Active") return !task.complete;
        if (radioValue === "Completed") return task.complete;
      });
  };

  return (
    <Box component='main' sx={{ padding: "24px 0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
      <TasksFilter
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        filteredTasks={filteredTasks}
      />
      <NewTaskForm
        open={openNewTaskModal}
        onClose={handleCloseNewTaskModal}
        setTasks={setTasks}
        bgColorSelected={bgColorSelected}
        setBgColorSelected={setBgColorSelected}
      />
      {tasks.length === 0 ? (
        <NoTasksNotice message='Congrats! Your task list is empty. Create a new task to begin 👍' />
      ) : (
        <TaskList
          tasks={filteredTasks()}
          setTasks={setTasks}
          setTaskInTrash={setTaskInTrash}
        />
      )}
    </Box>
  );
}
