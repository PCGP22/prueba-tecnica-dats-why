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
      <FormControl>
        <form>
          <input />
          <button>Submit</button>
        </form>
      </FormControl>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </>
  );
}

export default App;
