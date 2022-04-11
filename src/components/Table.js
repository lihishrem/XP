// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Grid } from '@mui/material';
// import Employee from './Employee';
// import { useSelector } from 'react-redux';



// export default function AllEmployees() {
//     const {employees} = useSelector(state => state.employees);

//   return (
//     <Grid container>
//         <Grid item xs={12}>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650, direction:"rtl" }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>תעודת זהות</TableCell>
//             <TableCell align="center">שם עובד</TableCell>
//             <TableCell align="center">שעות חריגות</TableCell>
//             <TableCell align="center">שעות ידניות</TableCell>
//             <TableCell align="center">שעות</TableCell>
//             <TableCell align="center">סהכ שעות</TableCell>
//             <TableCell align="center">אפשרויות</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {employees.map((employee) => (
//             <Employee employee={employee} key={employee.id}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}></Employee>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </Grid>
//     </Grid>
//   );
// }
