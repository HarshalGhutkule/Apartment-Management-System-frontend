import * as React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = styled.div`
  & a {
    text-decoration:none;
    color:white;
  }
`;

export const Navbar = () => {
  const a = useSelector((store)=>store.username);
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
                <MenuIcon />
              </Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              APARTMENT MANAGER
            </Typography>
            <Link to={"/register"}>
              <Button color="inherit">{a ? a : "Log in"}</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </Main>
  );
};
