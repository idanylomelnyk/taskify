import { useState } from "react";
import { Container, CssBaseline, Stack } from "@mui/material";
import TaskList from "../TaskList/TaskList";
import AddForm from "../AddForm/AddForm";
import SearchForm from "../SearchForm/SearchForm";

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
  const [query, setQuery] = useState("");

  const filteredTasks = () => {
    if (!query) return tasks;

    return tasks.filter(
      (task) =>
        task.description.toLowerCase().includes(query.toLowerCase()) ||
        task.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <CssBaseline>
      <Container>
        <Stack direction='row' sx={{ justifyContent: "space-between" }}>
          <AddForm setTasks={setTasks} />
          <SearchForm query={query} setQuery={setQuery} />
        </Stack>
        <TaskList tasks={filteredTasks()} setTasks={setTasks} />
      </Container>
    </CssBaseline>
  );
}
