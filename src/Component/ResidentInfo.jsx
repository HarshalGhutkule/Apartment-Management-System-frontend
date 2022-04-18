import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export const ResidentInfo = () => {
  let resident = useSelector((store) => store.resident);

  const { flatNumber } = useParams();

  resident = resident.filter((a)=>flatNumber == a.flatNumber);

  return (
    <div>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary={`Apartment Name : ${resident[0] && resident[0].apartmentName}`} />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary={`Block Name : ${resident[0] && resident[0].blockName}`} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={`Flat Number : ${resident[0] && resident[0].flatNumber}`} />
        </ListItem>
        <Divider light />
      </List>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resident &&
              resident.map((row,i) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i+1}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.age}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
