import { Box, Button, Card, Dialog, List, Typography } from "@mui/material";
import RemovedTaskItem from "../../components/RemovedTaskItem/RemovedTaskItem";
import NoTasksNotice from "../../components/NoTasksNotice/NoTasksNotice";
import { useState } from "react";

export default function TrashPage({ taskInTrash, setTaskInTrash, setTasks }) {
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const handleOpenModalConfirm = () => setOpenModalConfirm(true);
  const handleCloseModalConfirm = () => setOpenModalConfirm(false);

  const clearTrash = () => {
    setTaskInTrash([]);
    handleCloseModalConfirm();
  };

  return (
    <>
      <Box sx={{ p: "32px 0" }}>
        {taskInTrash.length === 0 ? null : (
          <Button variant='contained' onClick={handleOpenModalConfirm}>
            Clear trash
          </Button>
        )}

        {taskInTrash.length === 0 ? (
          <NoTasksNotice message='The task will be automatically deleted after 7 days.' />
        ) : (
          <List
            disablePadding
            sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}
          >
            {taskInTrash.map(
              ({ id, title, description, complete, bgColor }) => (
                <RemovedTaskItem
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  complete={complete}
                  bgColor={bgColor}
                  taskInTrash={taskInTrash}
                  setTaskInTrash={setTaskInTrash}
                  setTasks={setTasks}
                />
              )
            )}
          </List>
        )}
      </Box>
      <Dialog open={openModalConfirm} onClose={handleCloseModalConfirm}>
        <Card sx={{ p: 1, width: "300px" }}>
          <Typography
            sx={{ textAlign: "center", fontSize: "18px", fontWeight: "500" }}
          >
            Do you want to clear the trash and delete {taskInTrash.length} tasks
            forever?
          </Typography>
          <Box
            sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 1 }}
          >
            <Button onClick={handleCloseModalConfirm}>Cancel</Button>
            <Button onClick={clearTrash}>Delete</Button>
          </Box>
        </Card>
      </Dialog>
    </>
  );
}
