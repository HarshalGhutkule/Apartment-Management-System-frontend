import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Main = styled.div`
  align-items: center;
  & .box {
    height: 450px;
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

    let token = useSelector((store)=>store.token);
    const user = useSelector((store)=>store.username);

    const initalState = {
        name:"",
        age:"",
        gender:"",
        apartmentName:"",
        flatNumber:"",
        blockName:"",
        residenttype:""
    }

    const reducer = (state,{type,payload})=>{
        switch(type){
            case "name":
                return {...state,name:payload};
            case "age":
                return {...state,age:payload};
            case "gender":
                return {...state,gender:payload};
            case "apartmentName":
                return {...state,apartmentName:payload};
            case "flatNumber":
                return {...state,flatNumber:payload};
            case "blockName":
                return {...state,blockName:payload};
            case "residenttype":
                return {...state,residenttype:payload};
            default:
                return state;
        }
    }

    const [state,dispatch] = React.useReducer(reducer,initalState);

    let {name,age,gender,apartmentName,flatNumber,blockName,residenttype} = state;

    const addResident = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/resident",state,{
            headers: {
              'Authorization': `Bearer ${token}` 
            }}).then(()=>{
            alert("Resident added Successful");
            dispatch({type:"name",payload:""})
            dispatch({type:"age",payload:""})
            dispatch({type:"gender",payload:""})
            dispatch({type:"apartmentName",payload:""})
            dispatch({type:"flatNumber",payload:""})
            dispatch({type:"blockName",payload:""})
            dispatch({type:"residenttype",payload:""})
        }).catch(()=>alert("Something went wrong"))
    }

    if(user === "") {
        return <Navigate to="/register"/>
      }

  return (
    <Main>
      <Box className="box">
        <h2>Add Details of Resident</h2>
        <form>
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Name"
            value={name}
            variant="outlined"
            onChange={(e)=>dispatch({type:"name",payload:e.target.value})}
          />
          <span> </span>
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Age"
            value={age}
            variant="outlined"
            onChange={(e)=>dispatch({type:"age",payload:e.target.value})}
            
          />
          <br /><br />
          <Box sx={{ minWidth: 220,display:"inline" }}>
          <FormControl sx={{ minWidth: 210 }}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="type"
              onChange={(e)=>dispatch({type:"gender",payload:e.target.value})}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
          <span> </span>
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Apartment"
            value={apartmentName}
            variant="outlined"
            onChange={(e)=>dispatch({type:"apartmentName",payload:e.target.value})}
          />
          <br /><br />
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Block Number"
            value={blockName}
            variant="outlined"
            onChange={(e)=>dispatch({type:"blockName",payload:e.target.value})}
          />
          <span> </span>
          <TextField
            id="outlined-basic"
            type={"text"}
            label="Flat Number"
            value={flatNumber}
            variant="outlined"
            onChange={(e)=>dispatch({type:"flatNumber",payload:e.target.value})}
          />
          <br /><br />
          <Box sx={{ minWidth: 220,display:"inline" }}>
          <FormControl sx={{ minWidth: 210 }}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={residenttype}
              label="type"
              onChange={(e)=>dispatch({type:"residenttype",payload:e.target.value})}
            >
              <MenuItem value={"Owner"}>Owner</MenuItem>
              <MenuItem value={"Tenant"}>Tenant</MenuItem>
            </Select>
          </FormControl>
        </Box>
          <br />
          <br />
          <Button variant="contained" onClick={addResident}>
            Add
          </Button>
        </form>
      </Box>
    </Main>
  );
};
