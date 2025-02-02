import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Box, Container, CssBaseline } from "@mui/material";
import HomePage from "../../pages/HomePage";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Navigation />
        <Container maxWidth='false'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
}
