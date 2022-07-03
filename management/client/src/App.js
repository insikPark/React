import './App.css';
import Customer from './component/Customer';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Paper } from '@mui/material';
import {useEffect} from 'react';

let nextId = 4;

function App() {
  
  // const [customers, setCustomers] = useState([                      
  // {
  //   'id' : 1,
  //   'name' : '이순신',
  //   'birthday' : '950515',
  //   'gender' : '남',
  //   'job' : '장군'
  // },
  // {
  //   'id' : 2,
  //   'name' : '장보고',
  //   'birthday' : '970302',
  //   'gender' : '남',
  //   'job' : '학생'
  // }, 
  // {
  //   'id' : 3,
  //   'name' : '유관순',
  //   'birthday' : '930212',
  //   'gender' : '여',
  //   'job' : '유튜버'
  // }]);
    
    const [customers, setCustomers] = useState( [ ] );
  
    const callApi = async () => {
      const response = await fetch('/api/customer');
      const body = await response.json();
      console.log(body);    //TODO: 콘솔 찍어보셈
      return body;
    };
  
    useEffect(() => {
      callApi().then((data) => setCustomers(data));
    }, [ ] );
    console.log(customers);    

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
