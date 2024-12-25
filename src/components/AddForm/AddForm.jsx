import { useState } from "react";
import { Box, TextField, Button, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { nanoid } from "nanoid";

export default function AddForm({ setTasks }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const addTask = (newTask) => {
    setTasks((prev) => {
      return [...prev, newTask];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target.elements;
    addTask({
      id: nanoid(),
      title: form.title.value,
      description: form.description.value,
      complete: false,
    });

    e.target.reset();
  };

  return (
    <>
      <Button onClick={handleOpen}>New task</Button>
      <Modal open={isModalOpen} onClose={handleClose}>
        <Box
          onSubmit={handleSubmit}
          component='form'
          sx={{
            padding: 1,
            borderRadius: 1,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            backgroundColor: "#fff",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <TextField
            label='Title'
            name='title'
            variant='outlined'
            sx={{ width: "300px" }}
          ></TextField>
          <TextField
            label='Description'
            name='description'
            multiline
            rows={6}
            sx={{ width: "300px" }}
          ></TextField>
          <Button type='submit' variant='contained' sx={{ width: "300px" }}>
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
}
