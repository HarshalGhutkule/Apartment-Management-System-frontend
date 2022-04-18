import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Main = styled.div`
  align-items: center;
  & .box {
    height: 350px;
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

export const Register = () => {

    const navigate = useNavigate();

    const initalState = {
        userName:"",
        password:""
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

    const userRegistered = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/register",state).then(()=>{
            alert("Registration Successful");
            dispatch({type:"userName",payload:""})
            dispatch({type:"password",payload:""})
            navigate("/login");
        }).catch(()=>alert("Password is Not Strong & username should be atleast 3 char"))
    }
    
  return (
    <Main>
      <Box className="box">
        <h2>Sign up</h2>
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
          <Button variant="contained" onClick={userRegistered}>
            Register
          </Button>
        </form>
        <p>If already registered <Link to={"/login"}>Login</Link></p>
      </Box>
    </Main>
  );
};
