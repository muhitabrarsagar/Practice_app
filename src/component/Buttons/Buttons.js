import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useReducer, useEffect, useMemo, useCallback } from "react";
import { UserContext } from "../hookspass/Context";
import Text from "../Text";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1, color: true };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "SET_COUNT":
      return { ...state, count: action.payload };

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
    const storedCount = localStorage.getItem("count");
    if (storedCount) {
      dispatch({ type: "SET_COUNT", payload: JSON.parse(storedCount) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(state.count));
  }, [state.count]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "count") {
        dispatch({ type: "SET_COUNT", payload: JSON.parse(event.newValue) });
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleIncrement = useCallback(() => {
    dispatch({ type: "INCREMENT" });
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "DECREMENT" });
  }, []);

  const memoizedState = useMemo(() => state, [state]);

  return (
    <UserContext.Provider value={{ state: memoizedState, dispatch }}>
      <Text />
      <TextField
        onChange={(e) =>
          dispatch({ type: "SET_COUNT", payload: Number(e.target.value) })
        }
        value={state.count}
      />
      <Typography mt={"10px"}>{state.count}</Typography>
      <Button
        onClick={handleIncrement}
        sx={{
          background: state.color ? "red" : "blue",
          color: state.color ? "white" : "",
          border: state.color ? "1px solid #000" : "white",
          textTransform: "none",
        }}
      >
        pluseone
      </Button>
      <Button onClick={handleDecrement}>MiOne</Button>

      <Typography sx={{ textAlign: "center", fontSize: "24px" }}>
        I am Muhit Abrar
      </Typography>
    </UserContext.Provider>
  );
};

export default Buttons;
