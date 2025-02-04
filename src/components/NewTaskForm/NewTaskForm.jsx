import {
  Button,
  Box,
  Dialog,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { nanoid } from "nanoid";
import CloseIcon from "@mui/icons-material/Close";
import ColorPicker from "../ColorPicker/ColorPicker";

export default function NewTaskForm({
  open,
  onClose,
  setTasks,
  bgColorSelected,
  setBgColorSelected,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((prev) => {
      return [
        ...prev,
        {
          id: nanoid(),
          title: e.target.elements.title.value,
          description: e.target.elements.description.value,
          complete: false,
          bgColor: bgColorSelected,
        },
      ];
    });

    e.target.reset();
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <Box
          component='form'
          sx={{
            width: 400,
            position: "relative",
            padding: 3,
            bgcolor: bgColorSelected,
          }}
          onSubmit={handleSubmit}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
            Create a new task
          </Typography>
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <TextField
            label='Title'
            name='title'
            variant='outlined'
            sx={{ mt: 2, width: "100%", bgcolor: "#fff" }}
          ></TextField>
          <TextField
            label='Description'
            name='description'
            variant='outlined'
            multiline
            rows={4}
            sx={{ mt: 2, mb: 2, width: "100%", bgcolor: "#fff" }}
          ></TextField>
          <ColorPicker setBgColorSelected={setBgColorSelected} />
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 2, width: "100%" }}
          >
            Save
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
