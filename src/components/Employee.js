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
        <Draggable draggableId={props.employee.id}>
            {(provided)=>{
                <TableRow {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>
                    <TableCell component="th" scope="row">
                    {props.employee.id}
                    </TableCell>
                    <TableCell align="right">
                        <CircleIcon style={{color: props.employee.isConnected? "green" : "orange"}}/>
                        {props.employee.name}
                    </TableCell>
                    <TableCell align="center">{props.employee.unusalHours}</TableCell>
                    <TableCell align="center">{props.employee.manualHours}</TableCell>
                    <TableCell align="center">{props.employee.hours}</TableCell>
                    <TableCell align="center">{props.employee.totalHours}</TableCell>
                    <TableCell align="center">
                        <Button><EqualizerIcon/></Button>
                        <Button><MoreHorizIcon/></Button>
                    </TableCell>
                </TableRow>

            }}
            
        </Draggable>
    );
}

export default Employee;