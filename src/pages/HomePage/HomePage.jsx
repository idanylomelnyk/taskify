import { useState } from "react";
import { Box, Button } from "@mui/material";
import TaskList from "../../components/TaskList/TaskList";
import NoTasksNotice from "../../components/NoTasksNotice/NoTasksNotice";
import TasksFilter from "../../components/TasksFilter/TasksFilter";

export default function HomePage({ tasks, setTasks, setTaskInTrash }) {
  const [radioValue, setRadioValue] = useState("All");
  const [checkedId, setCheckedId] = useState([]);

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

  const handleCheckedAll = () => {
    setCheckedId([]);
    for (const task of tasks) {
      setCheckedId((prev) => {
        return [...prev, task.id];
      });
    }
  };

  const handleDeselectAll = () => {
    setCheckedId([]);
  };

  return (
    <Box component='main'>
      {tasks.length > 0 && (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <TasksFilter
            radioValue={radioValue}
            setRadioValue={setRadioValue}
            filteredTasks={tasksFilter}
          />
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              {tasks.length === checkedId.length ? (
                <Button variant='contained' onClick={handleDeselectAll}>
                  Deselect all
                </Button>
              ) : (
                <Button variant='contained' onClick={handleCheckedAll}>
                  Select all
                </Button>
              )}
              <Button
                variant='contained'
                onClick={removeChecked}
                disabled={checkedId < 1}
              >
                Delete checked
              </Button>
            </Box>
          </Box>
        </Box>
      )}

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
