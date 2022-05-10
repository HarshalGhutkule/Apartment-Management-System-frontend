import * as React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToken, addUsername } from "../Redux/Action";
import { devices } from '../Devices/device';

const Main = styled.div`
 @media ${devices.mobileL} {
    min-width: 425px;
    button{
      width:85px;
      height:35px;
      font-size:12px;
    }
    .apart{
      font-size:16px;
      font-weight:600;
    }
}
  & a {
    text-decoration:none;
    color:white;
  }
  & p{
    font-size:14px;
    font-weight:600;
  }
`;

export const Navbar = () => {

  const a = useSelector((store)=>store.username);

  const dispatch = useDispatch();

  const clearUser = ()=>{
    dispatch(addUsername(""));
    dispatch(addToken(""))
  }
  
  return (
    <Main>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to={"/"}>
                <p>HOME</p>
              </Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="apart">
              APARTMENT MANAGER
            </Typography>
            <Link to={"/register"}>
              <Button color="inherit">{a ? a : "Log in"}</Button>
            </Link>
            {a ? <Button color="inherit" onClick={clearUser}>Log out</Button> : <></>}
          </Toolbar>
        </AppBar>
      </Box>
    </Main>
  );
};
