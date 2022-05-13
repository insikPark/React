import { useState } from "react";
import UserName from "./UserName";


export default function Hello2({age}){

    // function showName(){    // 첫번째 방식
    //     console.log("Mike");
    // }

    function showText(e){
        console.log(e.target.value)
    }

    const [name, setName] = useState('Mike');

    const msg = age > 19 ? '성인입니다' : '미성년자 입니다';

    function changeName(){
        // const newName = name === 'Mike' ? 'Jane' : 'Mike';

        // setName(newName);

        setName(name === 'Mike' ? 'Jane' : 'Mike'); // 위와 같은 표현
    }

 return(
     <div>
         <h2 id="name">{name}({age}) : {msg}</h2>
         <button onClick={changeName}>Change Name</button>
         <br></br>
         <UserName name={name} />
         <button onClick={() => {   // 두번째 방식
             console.log(30);
         }}
         
         >Show age
         </button>
         <br></br>
         <input type="text" onChange={showText} />
         
     </div>
 );
}