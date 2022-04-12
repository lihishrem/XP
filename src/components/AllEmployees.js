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
import { useDispatch, useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import {DragDropContext} from 'react-beautiful-dnd'
import { UpdateEmployees } from '../redux/employeesState'


export default function AllEmployees() {
    const {employees} = useSelector(state => state.employees);
    const [colunms, setcolunms] =  React.useState(["תעודת זהות","שם עובד","שעות חריגות","שעות ידניות","שעות","סהכ שעות","אפשרויות"]);
    //const colunms = ["שם עובד","תעודת זהות","שעות חריגות","שעות ידניות","שעות","סהכ שעות","אפשרויות"]
    const dispatch = useDispatch();

    const handleDragEnd = (e) => {
      if (!e.destination) return;
      let tempData = [...employees]
      let [source_data] = tempData.splice(e.source.index, 1);
      tempData.splice(e.destination.index, 0, source_data);
      dispatch(UpdateEmployees(tempData));
    };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
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
        <Droppable droppableId={"droppable"}>
          {(provided)=>{ 
            return(<TableBody {...provided.droppableProps} ref={provided.innerRef}>
            {employees.map((employee, index) => (
            <Employee employee={employee} key={employee.id} index={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}></Employee>
            ))}
            {provided.placeholder}
           </TableBody>)
        
          }}
          </Droppable>
        
        
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
    </DragDropContext>
  );
}
