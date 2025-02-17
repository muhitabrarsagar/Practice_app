import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "./hookspass/Context";

const Text = () => {
  const { state } = useContext(UserContext);
  return (
    <div>
      <Typography sx={{ fontSize: "32px" }}>
        {state.text} {state.count}
      </Typography>
      <Typography sx={{ fontSize: "20px" }}>{state.name}</Typography>
    </div>
  );
};

export default Text;
