 import TableRow from '@mui/material/TableRow';
 import TableCell from '@mui/material/TableCell';


export default function Customer({customers}){

    return(
        <>         
        {customers.map(c => (
        <TableRow>        
            <TableCell>{c.id} </TableCell>    
            <TableCell>{c.name}</TableCell>
            <TableCell>{c.birthday}</TableCell>
            <TableCell>{c.gender}</TableCell>
            <TableCell>{c.job}</TableCell>
        </TableRow>
        ))}
        </>        
    );
}