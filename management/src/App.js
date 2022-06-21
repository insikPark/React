import './App.css';
import Customer from './component/Customer';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function App() {
  
  const [customers, setCustomers] = useState([                      // 현재 등록돼있는 각 일정에 대한 정보를 나타내기 위한 useState
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
    
    <Table className='ta'>
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
   
  )
}

export default App;
