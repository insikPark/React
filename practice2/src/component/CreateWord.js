import useFetch from "../hooks/useFetch";
import { useRef, useState } from "react";
import {useNavigate} from "react-router";

export default function CreateWord(){

    const days = useFetch("http://localhost:3001/days");

    const navigate = useNavigate(); // 처리 후 원하는 페이지로 이동시키기 위함

    const [isLoading, setIsLoading] = useState(false);  // 저장 버튼 여러 번 클릭시 발생되는 에러를 방지하기 위함

    function onSubmit(e){   // 저장 버튼 클릭 시, 새로고침 되는 것을 방지하기 위함
        e.preventDefault();
        
        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);

        if(!isLoading){
            setIsLoading(true);
        fetch(`http://localhost:3001/words/`, {   // words까지만 입력을 하고 POST를 날리면 새로운 단어 생성
        method : "POST",
        headers : {
            "Content-Type"  : "application/json",   
        },
        body : JSON.stringify({ 
            day : dayRef.current.value,
            eng : engRef.current.value,
            kor : korRef.current.value,
            isDone : false  // 고정값
        }),
    })
    .then(res => {
        if(res.ok) {
            alert("단어가 추가되었습니다.");
            navigate(`/day/${dayRef.current.value}`);
            setIsLoading(false);
        }
    })
    }}

    const engRef = useRef(null);  // useRef는 dom에 접근할 때 사용 
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label id="label">Eng</label>
            <input type="text" placeholder="영단어를 입력하세요." ref={engRef}></input>
        </div>
        <div className="input_area">
            <label id="label">Kor</label>
            <input type="text" placeholder="한글 뜻을 입력하세요." ref={korRef}></input>
        </div>
        <div className="input_area">
            <label id="label">Day</label>
            <select className="input_area select" ref={dayRef}>
                {days.map(day => (
                <option key={day.id} value={day.day}>{day.day}</option>
            ))}
            </select>
        </div>
        <button style={{opacity : isLoading ? 0.3 : 1,}}>{isLoading ? "Saving..." : "저장"}</button>
    </form>
)}