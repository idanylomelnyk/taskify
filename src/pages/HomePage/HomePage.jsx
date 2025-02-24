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
  const [checkedId, setCheckedId] = useState([]);

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

  const removeChecked = () => {
    for (const id of checkedId) {
      setTasks((prev) => {
        return prev.filter((task) => task.id !== id);
      });

      const taskDelete = tasks.find((t) => t.id === id);
      const deleteTime = Date.now() + 60000 * 5;

      setTaskInTrash((prev) => {
        return [{ ...taskDelete, deleteAt: deleteTime }, ...prev];
      });
    }
    setCheckedId([]);
  };

  return (
    <Box component='main' sx={{ padding: "24px 0" }}>
      <Button
        aria-label='open-new-task-form'
        variant='contained'
        onClick={handleOpenNewTaskModal}
        sx={{ mr: 2 }}
      >
        New task
      </Button>

      {checkedId.length > 0 && (
        <Button variant='contained' onClick={removeChecked}>
          Delete checked: {checkedId.length}
        </Button>
      )}

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
          checkedId={checkedId}
          setCheckedId={setCheckedId}
        />
      )}
    </Box>
  );
}
