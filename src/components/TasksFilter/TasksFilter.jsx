import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export default function TasksFilter({
  radioValue,
  setRadioValue,
  filteredTasks,
}) {
  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <FormControl>
        <RadioGroup
          row
          defaultValue='All'
          value={radioValue}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            label='All'
            value='All'
            control={<Radio />}
          ></FormControlLabel>
          <FormControlLabel
            label='Active'
            value='Active'
            control={<Radio />}
          ></FormControlLabel>
          <FormControlLabel
            label='Completed'
            value='Completed'
            control={<Radio />}
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
      <Typography sx={{ mt: 2, fontWeight: 500 }}>
        Total: {filteredTasks().length}
      </Typography>
    </Box>
  );
}
