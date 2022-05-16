import dummy from "../db/data.json" // 첫번째로 할 일 : Dummy 데이터 불러오기
import {Link} from "react-router-dom";

export default function DayList(){

    console.log(dummy); // 잘 들어오는지 확인하기 위함

    return (
        <ul className="list_day">
            {dummy.days.map(day =>(
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