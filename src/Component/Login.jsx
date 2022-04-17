import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Main = styled.div`
  align-items: center;
  & .box {
    height: 300px;
    width: 300px;
    margin: auto;
    margin-top: 20px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
  }
  & .box h2, p {
    font-family: 'Open Sans', sans-serif;
    color:#1976d2;
  }
  & button{
      width:210px;
  }
  & a{
      color:#1976d2;
  }
`;

export const Login = () => {
  return (
    <Main>
      <Box className="box">
        <h2>Log in</h2>
        <form>
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Username"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Password"
            variant="outlined"
            
          />
          <br />
          <br />
          <Button variant="contained">
            Log in
          </Button>
        </form>
      </Box>
    </Main>
  );
};
