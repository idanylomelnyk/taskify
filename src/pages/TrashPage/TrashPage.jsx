import { useState, useEffect } from "react";
import { Box, Button, List, Typography } from "@mui/material";
import RemovedTaskItem from "../../components/RemovedTaskItem/RemovedTaskItem";
import NoTasksNotice from "../../components/NoTasksNotice/NoTasksNotice";
import DeleteConfirm from "../../components/DeleteConfirm/DeleteConfirm";

export default function TrashPage({ tasksInTrash, setTaskInTrash, setTasks }) {
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const handleOpenModalConfirm = () => setOpenModalConfirm(true);
  const handleCloseModalConfirm = () => setOpenModalConfirm(false);

  const clearTrash = () => {
    setTaskInTrash([]);
    handleCloseModalConfirm();
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTaskInTrash((prev) => {
        const updateTasks = prev.filter((t) => t.deleteAt > Date.now());
        localStorage.setItem("tasksInTrash", JSON.stringify(updateTasks));
        return updateTasks;
      });
    }, 60000);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ p: "24px 0" }}>
      {tasksInTrash.length === 0 ? null : (
        <Button variant='contained' onClick={handleOpenModalConfirm}>
          Clear trash
        </Button>
      )}
      <Typography sx={{ mt: 2, fontWeight: 500 }}>
        Total: {tasksInTrash.length}
      </Typography>

      {tasksInTrash.length === 0 ? (
        <NoTasksNotice message='Trash is empty.' />
      ) : (
        <List
          disablePadding
          sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}
        >
          {tasksInTrash.map(
            ({ id, title, description, complete, bgColor, deleteAt }) => (
              <RemovedTaskItem
                key={id}
                id={id}
                title={title}
                description={description}
                complete={complete}
                bgColor={bgColor}
                taskInTrash={tasksInTrash}
                setTaskInTrash={setTaskInTrash}
                setTasks={setTasks}
                deleteAt={deleteAt}
              />
            )
          )}
        </List>
      )}
      <DeleteConfirm
        open={openModalConfirm}
        onClose={handleCloseModalConfirm}
        clearTrash={clearTrash}
      />
    </Box>
  );
}
