import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useParams } from "react-router-dom";
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
  let [data, setData] = React.useState([]);
  let resident = useSelector((store) => store.resident);

  const { flatNumber } = useParams();

  resident = resident.filter((a)=>flatNumber == a.flatNumber);
    
  console.log("resident",resident);

  return (
    <div>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary={resident[0] && resident[0].apartmentName} />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>

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
            {data &&
              data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.blockName}
                  </TableCell>
                  <TableCell align="center">{row.flatNumber}</TableCell>
                  <TableCell align="center">{row.residenttype}</TableCell>
                  <TableCell align="center">{1}</TableCell>
                  <TableCell align="center">
                    <Link to={`/edit-resident-detail/${row._id}`}>
                      {"Edit"}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
