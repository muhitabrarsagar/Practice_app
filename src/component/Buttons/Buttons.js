import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useReducer, useEffect } from "react";
import { UserContext } from "../hookspass/Context";
import Text from "../Text";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: Number(state.count) + 1, color: true };

    case "DECREMENT":
      return { ...state, count: Number(state.count) - 1 };

    case "SET_COUNT":
      return { ...state, count: Number(action.payload) };

    default:
      return state;
  }
};

const initialState = {
  text: "Try to learn useContext",
  name: "Muhit Abrar Sagar",
  count: 0,
  color: false,
};

const Buttons = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedCount = Number(localStorage.getItem("count"));
    if (storedCount) {
      dispatch({ type: "SET_COUNT", payload: parseInt(storedCount) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", state.count);
  }, [state.count]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Text />
      <TextField
        onChange={(e) =>
          dispatch({ type: "SET_COUNT", payload: e.target.value })
        }
        value={state.count}
      />
      <Typography mt={"10px"}>{state.count}</Typography>
      <Button
        onClick={() => dispatch({ type: "INCREMENT" })}
        sx={{
          background: state.color ? "red" : "blue",
          color: state.color ? "white" : "",
          border: state.color ? "1px solid #000" : "white",
          textTransform: "none",
        }}
      >
        pluseone
      </Button>
      <Button onClick={() => dispatch({ type: "DECREMENT" })}>MiOne</Button>
    </UserContext.Provider>
  );
};

export default Buttons;
