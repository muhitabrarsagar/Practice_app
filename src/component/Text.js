import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContex } from "./hookspass/Context";

const Text = () => {
  const { state } = useContext(UserContex);
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
