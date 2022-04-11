import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Grid } from '@mui/material';
import Employee from './Employee';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd'



export default function AllEmployees() {
    const {employees} = useSelector(state => state.employees);

  return (
    <Grid container>
        <Grid item xs={12}>
    <TableContainer component={Paper}>
      <Table sx={{ width: "inherit", direction:"rtl" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>תעודת זהות</TableCell>
            <TableCell align="center">שם עובד</TableCell>
            <TableCell align="center">שעות חריגות</TableCell>
            <TableCell align="center">שעות ידניות</TableCell>
            <TableCell align="center">שעות</TableCell>
            <TableCell align="center">סהכ שעות</TableCell>
            <TableCell align="center">אפשרויות</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Droppable droppableId={"1"}>
          {(provided)=>{ 
            <div {...provided.droppableProps} innerRef={provided.innerRef}>
            {employees.map((employee, index) => (
            <Employee employee={employee} key={employee.id} index={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}></Employee>
            ))}
            {provided.placeholder}
           </div>
          }}
          </Droppable>
        </TableBody>
        
        
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
  );
}
