import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch"

export default function CreateDay(){

    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    function addDay(){
        fetch(`http://localhost:3001/days/`, {   // words까지만 입력을 하고 POST를 날리면 새로운 단어 생성
        method : "POST",
        headers : {
            "Content-Type"  : "application/json",   
        },
        body : JSON.stringify({ 
            day : days.length + 1       
        }),
    }).then(res => {
        if(res.ok){
            alert("Day가 추가되었습니다.");
            navigate('/');
        }
    })
    }

    return (
        <div>
            <h3 id="current_day">현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>추가</button>
        </div>
    );
}