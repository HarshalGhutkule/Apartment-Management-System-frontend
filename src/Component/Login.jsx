import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToken, addUsername } from "../Redux/Action";

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

    const navigate = useNavigate();

    const dispatchRedux = useDispatch();

    const initalState = {
        userName:"",
        password:"",
    }

    const reducer = (state,{type,payload})=>{
        switch(type){
            case "userName":
                return {...state,userName:payload};
            case "password":
                return {...state,password:payload};
            default:
                return state;
        }
    }

    const [state,dispatch] = React.useReducer(reducer,initalState);

    let {userName,password} = state;

    const userLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/login",state).then((res)=>{
            alert("Login Successful");
            dispatch({type:"userName",payload:""})
            dispatch({type:"password",payload:""})
            dispatchRedux(addUsername(state.userName))
            dispatchRedux(addToken(res.data.token))
            navigate("/")
        }).catch(()=>alert("Please try another username & password"))
    }

  return (
    <Main>
      <Box className="box">
        <h2>Log in</h2>
        <form>
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Username"
            value={userName}
            variant="outlined"
            onChange={(e)=>dispatch({type:"userName",payload:e.target.value})}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            type={"password"}
            label="Password"
            value={password}
            variant="outlined"
            onChange={(e)=>dispatch({type:"password",payload:e.target.value})}
          />
          <br />
          <br />
          <Button variant="contained" onClick={userLogin}>
            Log in
          </Button>
        </form>
      </Box>
    </Main>
  );
};
