import { useState } from "react";
import { Box, Button } from "@mui/material";
import TaskList from "../../components/TaskList/TaskList";
import NewTaskForm from "../../components/NewTaskForm/NewTaskForm";
import NoTasksNotice from "../../components/NoTasksNotice/NoTasksNotice";
import TasksFilter from "../../components/TasksFilter/TasksFilter";

export default function HomePage({ tasks, setTasks, setTaskInTrash }) {
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
  const [bgColorSelected, setBgColorSelected] = useState("#fff");
  const [radioValue, setRadioValue] = useState("All");

  const handleOpenNewTaskModal = () => setOpenNewTaskModal(true);
  const handleCloseNewTaskModal = () => {
    setOpenNewTaskModal(false);
    setBgColorSelected("#fff");
  };

  const tasksFilter = () => {
    return tasks.filter((task) => {
      if (radioValue === "All") return true;
      if (radioValue === "Active") return !task.complete;
      if (radioValue === "Completed") return task.complete;
    });
  };

  return (
    <Box component='main' sx={{ padding: "24px 0" }}>
      <Button
        aria-label='open-new-task-form'
        variant='contained'
        onClick={handleOpenNewTaskModal}
      >
        New task
      </Button>

      <TasksFilter
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        filteredTasks={tasksFilter}
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
          tasks={tasksFilter()}
          setTasks={setTasks}
          setTaskInTrash={setTaskInTrash}
        />
      )}
    </Box>
  );
}
