import * as React from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from '@mui/material/Paper';
import { Link, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Main = styled.div`
  & .features {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border:1px solid #c4c4c4;
    padding:1%;
  }
  & a{
    text-decoration:none;
  }
`;

export const Home = () => {

  const [type, setType] = React.useState("");
  const [data, setData] = React.useState([]);

  console.log(data);

  const user = useSelector((store)=>store.username);


  const handleChange = (event) => {
    setType(event.target.value);
  };

  React.useEffect(()=>{
    getData();
  },[])


  const getData = () => {
    axios.get("http://localhost:3001/apartment").then((res) => {
      setData(res.data);
    });
  };

  const sorting = (a)=>{
    if(a === 1){
      data.sort((a,b)=>a.block_id[0].flat_id[1].flatNumber-b.block_id[0].flat_id[2].flatNumber);
        setData([...data]);
    }
    else{
      data.sort((a,b)=>b.block_id[0].flat_id[3].flatNumber-a.block_id[0].flat_id[4].flatNumber);
        setData([...data]);
    }
  }

  if(user === "") {
    return <Navigate to="/register"/>
  }

  return (
    <Main>
      <br />
      <br />
      <div className="features">

        <Link to={"/resident-detail"}>
          <Button variant="contained"
            aria-label="outlined primary button group"
          >Add details</Button>
        </Link>

        <TextField id="outlined-basic" label="Search" variant="outlined" />

        <Pagination count={10} color="primary" />

        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="type"
              onChange={handleChange}
            >
              <MenuItem value={10}>Owner</MenuItem>
              <MenuItem value={20}>Tenant</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={()=>sorting(1)}>Flat No. Asc</Button>
          <Button onClick={()=>sorting(-1)}>Flat No. Desc</Button>
        </ButtonGroup>
      </div>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Block</TableCell>
                <TableCell align="center">Flat No.</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Resident</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.block_id[0].blockName}
                  </TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[0].flatNumber}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[0].resident_id[0].residenttype}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[0].resident_id.length}</TableCell>
                  <TableCell align="center">{"Edit"}</TableCell>
                </TableRow>
              ))}
              {data && data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.block_id[0].blockName}
                  </TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[1].flatNumber}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[1].resident_id[0].residenttype}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[1].resident_id.length}</TableCell>
                  <TableCell align="center">{"Edit"}</TableCell>
                </TableRow>
              ))}
              {data && data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.block_id[0].blockName}
                  </TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[2].flatNumber}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[2].resident_id[0].residenttype}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[2].resident_id.length}</TableCell>
                  <TableCell align="center">{"Edit"}</TableCell>
                </TableRow>
              ))}
              {data && data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.block_id[0].blockName}
                  </TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[3].flatNumber}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[3].resident_id[0].residenttype}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[3].resident_id.length}</TableCell>
                  <TableCell align="center">{"Edit"}</TableCell>
                </TableRow>
              ))}
              {data && data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.block_id[0].blockName}
                  </TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[4].flatNumber}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[4].resident_id[0].residenttype}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[4].resident_id.length}</TableCell>
                  <TableCell align="center">{"Edit"}</TableCell>
                </TableRow>
              ))}
              {data && data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.block_id[0].blockName}
                  </TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[5].flatNumber}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[5].resident_id[0].residenttype}</TableCell>
                  <TableCell align="center">{row.block_id[0].flat_id[5].resident_id.length}</TableCell>
                  <TableCell align="center">{"Edit"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Main>
  );
};
