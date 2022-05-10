import * as React from "react";
import styled from "styled-components";
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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addDataToRedux } from "../Redux/Action";
import TablePagination from '@mui/material/TablePagination';
import { devices } from '../Devices/device';

const Main = styled.div`
  @media ${devices.mobileL} {
    min-width: 425px;
    button{
      width:85px;
      height:35px;
      font-size:10px;
    }
    input{
      width:50px;
      height:5px;
    }
    select{
      height:5px;
    }
  }
  & .features {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border:1px solid #c4c4c4;
    padding:1%;
  }
  & a{
    text-decoration:none;
    color:black;
  }
  & .editBtn{
      color:green;
  }
  & .deleteBtn{
    color:red;
    cursor: pointer;
  }
  & h3{
    font-family: 'Open Sans', sans-serif;
    color:#1976d2;
  }
`;

export const Home = () => {

  let token = useSelector((store)=>store.token);
  let userId = useSelector((store)=>store.userId);
  const [type, setType] = React.useState("");
  let [data, setData] = React.useState([]);
  let resident = useSelector((store)=>store.resident);

  const dispatch = useDispatch();


  const user = useSelector((store)=>store.username);


  const handleChange = (event) => {
    resident = resident.filter((a)=>event.target.value == a.residenttype);
    setData(resident);
    setType(event.target.value);
  };

  const searchBlock = (e)=>{
    if(e.target.value == "") {
      resident = resident;
    }
    else {
      resident = resident.filter((a)=>e.target.value == a.blockName);
    }
    setData(resident);
  }

  React.useEffect(()=>{
    getData();
  },[])


  const getData = () => {
    axios.get("https://apartment-mng.herokuapp.com/resident").then((res) => {
      let x = res.data.filter((a)=>a.manager_id === userId);
      setData(x);
      dispatch(addDataToRedux(x));
    });
  };

  const deleteData = (id) => {
    axios.delete(`https://apartment-mng.herokuapp.com/resident/${id}`,{
      headers: {
        'Authorization': `Bearer ${token}` 
      }}).then(() => {
      getData();
    });
  };

  const sorting = (a)=>{
    if(a === 1){
      data.sort((a,b)=>a.flatNumber-b.flatNumber);
        setData([...data]);
    }
    else{
      data.sort((a,b)=>b.flatNumber-a.flatNumber);
        setData([...data]);
    }
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  if(user === "") {
    return <Navigate to="/register"/>
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Main>
      <h3>Apartment Name : {data[0] && data[0].apartmentName}</h3>
      <div className="features">

        <Link to={"/resident-detail"}>
          <Button variant="contained"
            aria-label="outlined primary button group"
          >Add details</Button>
        </Link>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={()=>sorting(1)}>Flat No. Asc</Button>
          <Button onClick={()=>sorting(-1)}>Flat No. Desc</Button>
        </ButtonGroup>

        <TextField id="outlined-basic" label="Search by Block" variant="outlined" onChange={searchBlock}/>

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
              <MenuItem value={"Owner"}>Owner</MenuItem>
              <MenuItem value={"Tenant"}>Tenant</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
                <TableCell align="center">Block</TableCell>
                <TableCell align="center">Flat No.</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Resident</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {data && data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
                <TableRow
                hover role="checkbox" tabIndex={-1}
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                  <Link to={`/resident-info/${row.flatNumber}`}>{row.blockName}</Link>
                  </TableCell>
                  <TableCell align="center"><Link to={`/resident-info/${row.flatNumber}`}>{row.flatNumber}</Link></TableCell>
                  <TableCell align="center"><Link to={`/resident-info/${row.flatNumber}`}>{row.residenttype}</Link></TableCell>
                  <TableCell align="center"><Link to={`/resident-info/${row.flatNumber}`}>{1}</Link></TableCell>
                  <TableCell align="center"><Link to={`/edit-resident-detail/${row._id}`} className="editBtn">{"Edit"}</Link></TableCell>
                  <TableCell align="center" className="deleteBtn" onClick={()=>deleteData(row._id)}>{"Delete"}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
      </div>
    </Main>
  );
};
