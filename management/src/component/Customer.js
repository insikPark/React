 import {TableRow} from '@material-ui/core/TableRow';
 import {TableCell} from '@material-ui/core/TableCell';


export default function Customer({key, name, birthday, gender, job}){



    return(
        <>         <TableRow>        
         <TableCell>번호 :</TableCell>
   
           {/* <TableCell>이름 : {name}</TableCell>
           <TableCell>생년월일 : {this.birthday}</TableCell>
           <TableCell>성별 : {this.gender}</TableCell>
           <TableCell>직업 : {this.job}</TableCell> */}
        </TableRow>
        </>

        
    );
}