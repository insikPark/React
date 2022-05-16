import dummy from "../db/data.json";
import { useParams } from "react-router-dom"; // Day를 눌렀을 때 그에 맞는 Day로 이동시키기 위해 사용

export default function Day(){

    const a = useParams();
    // const day = 3;
    const day = a.day;

    const wordList = dummy.words.filter(word => word.day === Number(day)); // word.day는 숫자이기 때문에 day를 숫자로 변환시켜 값을 비교한다

   // console.log(wordList);

   // console.log(a); 

    return <>
    <div className="content">
    <h2>Day {day}</h2>
    <table>
        <tbody id="table">
            {wordList.map(word=>(
                <tr key={word.id}>
                    <td>
                        {word.eng}
                    </td>                
                    <td>
                        {word.kor}
                    </td>
             </tr>
            ))}
        </tbody>
    </table>
    </div>
    </>;
}

// 특정 날짜를 클릭했을 때 해당 날짜에 해당하는 단어가 나오는 페이지