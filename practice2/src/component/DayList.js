//import dummy from "../db/data.json" // 첫번째로 할 일 : Dummy 데이터 불러오기 --> json으로부터 서버 연동 후 dummy 사용 x
import {Link} from "react-router-dom";
//import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function DayList(){

   // console.log(dummy); // 잘 들어오는지 확인하기 위함
    //const [days, setDays] = useState([]);   // 빈 배열로 만들고 api에서 리스트를 가져와 바꿔줌

    /* useEffect는 어떤 상태값이 바꼈을 때 동작하는 함수를 작성할 수 있음
    * 상태값이 변경되고 나서 다시 렌더링된 다음에 호출된다.
    * 단, 매번 변경이 일어날 때 마다 원하지 않는 함수 호출이 발생할 수 있다.
    * 이런 경우 useEffect의 두 번째 매개변수애 원하는 배열을 넣어
    * 해당 배열 조건이 발생할 경우에만 useEffect가 실행되도록 만든다.
    * 
    * 실행 후 딱 한번만 실행되게 할 때는 빈 배열을 넣으면 된다.
    */
    // useEffect(() => {       
    //      fetch("http://localhost:3001/days")           // api를 호출하기 위해 api 경로를 적어줌
    //      .then(res => {                                // json 서버 연결 시 포트번호를 3001로 정했기 떄문
    //          return res.json()
    //      })
    //      .then(data =>{
    //          setDays(data);
    //      })
    // }, []);   
    
    const days = useFetch("http://localhost:3001/days");

    return (
        <ul className="list_day">
            {/*dummy.days.map(day =>(*/}   {/*dummy 대신 아래 days 이용하여 가져옴*/}
            {days.map(day =>(
                <li key={day.id}>
                {/* <Link to = {"/day/${day.day}"}>Day {day.day}</Link> */}
                {/*바로 위 문장은 ""를 사용, 아래 문장은 `` 사용
                 --> Unexpected template string expression  no-template-curly-in-string
                     오류가 발생하기 때문에 아래 문장처럼 표기해준다.*/}
                    <Link to = {`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}          
        </ul>
    );
}

// li는 day 갯수만큼 그려줘야 하는데 이때는 map을 이용한 반복문을 사용한다
// map은  배열을 받아서 또다른 배열로 반환해주는 건데 이때 반환되는 요소는
// JSX로 작성해준다