import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CircleIcon from '@mui/icons-material/Circle';
import {Draggable} from 'react-beautiful-dnd'

function Employee(props) {
    return (
        <Draggable draggableId={props.employee.id} index={props.index}>
            {(provided)=>{
                return(
                <TableRow ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    {props.columnOrder.map((column,index)=>{
                        return(
                            <TableCell align="center" key={index}>
                                {props.employee[column]}
                                {(column === "name") &&  <CircleIcon style={{color: props.employee.isConnected? "green" : "orange"}}/>}
                                {(column === "options") &&  <Button><EqualizerIcon/></Button> }
                                {(column === "options") && <Button><MoreHorizIcon/></Button>}  
                            </TableCell>) 
                    })}
                </TableRow>)
            }}
        </Draggable>
    );
}

export default Employee;