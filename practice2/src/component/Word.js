import { useState } from "react"

export default function Word({word}){  /*word는 props를 통해 받아와야 에러가 안나옴*/
    
// [현재 상태 값 변수, 상태 값 갱신 함수] = useState(상태 초기값) 
    const [isShow, setIsShow] = useState(false);        // 뜻 버튼에 대한 useState
    const [isDone, setIsDone] = useState(word.isDone);  // checkBox에 대한 useState

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        setIsDone(!isDone);
    }

    return(
        <tr className={isDone ? "off" : ""}> 
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}></input>   {/*클릭할 때 마다 바뀌는 상태 변화를 나타내기 위함,
                                                                                         onChange 하지 않으면 읽기전용으로 고정값만 나옴*/}
            </td>
            <td>
                {word.eng}
            </td>                
            <td>
                {isShow && word.kor}    {/*뜻 버튼 클릭시 toggleShow함수가 호출되는데 이때 
                                           isShow가 true일 때만 뜻이 나타나게끔 하기 위함*/}
            </td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
                <button className="btn_del">삭제</button>
            </td> 
        </tr>
    )

}

// 단어의 뜻 보기 버튼 클릭 시 해당 단어만 해당이 되기 때문에 따로 컴포넌트를 제작해주는게 좋다
// 따라서 Word.js를 만들어서 나타내준다.

/**
 * REST API : URI 주소와 메소드로 CRUD 요청을 하는 것 
 * 
 * Create : POST
 * Read : GET
 * Update : PUT
 * Delete : DELETE
 */