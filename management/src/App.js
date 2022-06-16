import './App.css';
//import Customer from './component/Customer';
import Table from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function App() {
  
  // const Info= 
  // [{
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
  // 'id' : 3,
  // 'name' : '유관순',
  // 'birthday' : '930212',
  // 'gender' : '여',
  // 'job' : '유튜버'
  // }]

  // const Info= 
  // {
  //   'id' : 1,
  //   'name' : '이순신',
  //   'birthday' : '950515',
  //   'gender' : '남',
  //   'job' : '장군'
  // };
  
  return (
    <>
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
        da
      </TableBody>
      
   </Table>
   </>

   
  )
}

export default App;
