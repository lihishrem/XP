import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Employee from './Employee';
import { useDispatch, useSelector } from 'react-redux';
import { Droppable , Draggable} from 'react-beautiful-dnd';
import {DragDropContext} from 'react-beautiful-dnd'
import { UpdateEmployees } from '../redux/employeesState'


export default function AllEmployees() {
    // Initialize the headers titles of the table
    const headersTitles = {options: "אפשרויות", totalHours: "סהכ שעות", hours: "שעות", manualHours: "שעות ידניות", unusalHours: "שעות חריגות", name: "שם עובד", id: "תעודת זהות"};
    // A state that represents the columns order
    const [columnsOrder, setColumnsOrder] =  React.useState(["options", "totalHours", "hours", "manualHours", "unusalHours", "name", "id"]);
    // A state that represents all the employees, gets the employees from redux state
    const {employees} = useSelector(state => state.employees);

    const dispatch = useDispatch();

    /**
     * Called whenever the user drags and drops(after the drop) a row or a column and updates the
     * order of the relevant states 
     * @param {*} e 
     * @returns 
     */
    const handleDragEnd = (e) => {
      if (!e.destination) return;

      //checks if the user drag a row or a column
      if(e.destination.droppableId === "droppable"){
        let tempData = [...employees]
        let [source_data] = tempData.splice(e.source.index, 1);
        tempData.splice(e.destination.index, 0, source_data);
        dispatch(UpdateEmployees(tempData));
      }
      else{
        let tempData = [...columnsOrder];
        let [source_data] = tempData.splice(e.source.index, 1);
        tempData.splice(e.destination.index, 0, source_data);
        console.log(tempData);
        setColumnsOrder([...tempData])
      }
    };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ width: "inherit"}} aria-label="simple table"> 
              <TableHead>
                <Droppable droppableId={"droppable-c"} direction="horizontal" type="column">
                    {(provided) =>{ 
                      return(
                        <TableRow {...provided.droppableProps} ref={provided.innerRef} >
                            {columnsOrder.map((column,index)=>{
                              return( 
                              <Draggable key={index} draggableId={column} index={index} style={{overflow:"auto"}} >
                                {(provided)=>{
                                    return(
                                      <TableCell align="center" key={index} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                        {headersTitles[column]}
                                      </TableCell>)
                                }}
                              </Draggable>)
                            })}
                          {provided.placeholder}
                        </TableRow>)
                    }}
                </Droppable>
              </TableHead>
              <Droppable droppableId={"droppable"}>
                {(provided) =>
                { 
                  return(
                    <TableBody {...provided.droppableProps} ref={provided.innerRef}>
                      {employees.map((employee, index) => (
                      <Employee employee={employee} key={employee.id} index={index} columnOrder={columnsOrder}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      </Employee>)
                      )}
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
