import './App.css';
import Customer from './component/Customer';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Paper } from '@mui/material';


function App() {
  
  const [customers, setCustomers] = useState([                      
  {
    'id' : 1,
    'name' : '이순신',
    'birthday' : '950515',
    'gender' : '남',
    'job' : '장군'
  },
  {
    'id' : 2,
    'name' : '장보고',
    'birthday' : '970302',
    'gender' : '남',
    'job' : '학생'
  }, 
  {
    'id' : 3,
    'name' : '유관순',
    'birthday' : '930212',
    'gender' : '여',
    'job' : '유튜버'
  }]);
    

  return (
    <Paper sx={{width: '100%', overflowX : 'auto'}}>
      <Table sx={{minWidth: '1080px'}}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>       
          <>
          <Customer customers={customers} /> 
          </>                 
        </TableBody>      
      </Table> 
      </Paper>      
  )
}

export default App;
