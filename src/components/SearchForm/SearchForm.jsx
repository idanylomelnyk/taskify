import { TextField } from "@mui/material";

export default function SearchForm({ query, setQuery }) {
  const handleSearch = (e) => setQuery(e.target.value.trim());

  return (
    <>
      <TextField
        variant='standard'
        label='Search'
        value={query}
        onChange={handleSearch}
      ></TextField>
    </>
  );
}
