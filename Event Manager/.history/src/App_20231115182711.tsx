// import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";

function App() {
  const [age, setAge] = useState<number>(0);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setAge(Number(event.target.value));
  };
  return (
    <>
      <div>
        <Button variant="contained">Hello world</Button>
      </div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </>
  );
}

export default App;
