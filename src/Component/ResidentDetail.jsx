import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Main = styled.div`
  align-items: center;
  & .box {
    height: 400px;
    width: 600px;
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
  & span{
      width:100%;
  }
`;

export const ResidentDetail = () => {
  return (
    <Main>
      <Box className="box">
        <h2>Add Details of Resident</h2>
        <form>
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Name"
            variant="outlined"
          />
          <span> </span>
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Age"
            variant="outlined"
            
          />
          <br /><br />
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Gender"
            variant="outlined"
            
          />
          <span> </span>
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Apartment"
            variant="outlined"
          />
          <br /><br />
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Block Number"
            variant="outlined"
          />
          <span> </span>
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Flat Number"
            variant="outlined"
          />
          <br />
          <br />
          <Button variant="contained">
            Add
          </Button>
        </form>
      </Box>
    </Main>
  );
};
