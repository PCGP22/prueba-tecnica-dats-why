// import * as React from "react";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import FormControl from "@mui/material";

function App() {
  return (
    <>
      <div>
        <Button variant="contained">Hello world</Button>
      </div>
      <form>
        <FormControl defaultValue="" required>
          <input />
        </FormControl>
        <button>Submit</button>
      </form>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </>
  );
}

export default App;
