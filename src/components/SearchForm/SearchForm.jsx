import { Box, TextField } from "@mui/material";

export default function SearchForm({ query, handleSearch }) {
  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
      <TextField
        type='search'
        variant='standard'
        label='Search'
        value={query}
        onChange={handleSearch}
      ></TextField>
    </Box>
  );
}
