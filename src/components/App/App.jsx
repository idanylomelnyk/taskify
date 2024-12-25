import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import { Container, CssBaseline } from "@mui/material";
import AddForm from "../AddForm/AddForm";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "1Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, doloribus!",
      complete: false,
    },
    {
      id: 2,
      title: "2Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt vel unde nostrum incidunt modi ducimus doloremque molestiae pariatur accusantium?",
      complete: true,
    },
    {
      id: 3,
      title: "3Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, doloribus!",
      complete: false,
    },
    {
      id: 4,
      title: "1Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, doloribus!",
      complete: false,
    },
    {
      id: 5,
      title: "2Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt vel unde nostrum incidunt modi ducimus doloremque molestiae pariatur accusantium?",
      complete: true,
    },
    {
      id: 6,
      title: "3Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, doloribus!",
      complete: false,
    },
  ]);

  return (
    <Container>
      <CssBaseline>
        <AddForm setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </CssBaseline>
    </Container>
  );
}
