import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Buttons = () => {
  const [count, setCount] = useState(0);
  const pluseOne = () => {
    setCount(count + 1);
  };
  const MiOne = () => {
    setCount(count - 1);
  };
  return (
    <Box>
      <TextField
        onChange={(e) => setCount(e.target.value)}
        value={count}
      ></TextField>
      <Typography>{count}</Typography>
      <Button onClick={pluseOne}>pluseOne</Button>
      <Button onClick={MiOne}>MiOne</Button>
    </Box>
  );
};

export default Buttons;
