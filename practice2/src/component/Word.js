import { useState } from "react"

export default function Word({word : w}){  /*word는 props를 통해 받아와야 에러가 안나옴*/
                                            // word의 중복을 위해 새로운 명으로 할당
                                            // prop를 통해 넘어온 word를 w로 재할당
    
// [현재 상태 값 변수, 상태 값 갱신 함수] = useState(상태 초기값) 
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);        // 뜻 버튼에 대한 useState
    const [isDone, setIsDone] = useState(word.isDone);  // checkBox에 대한 useState

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        // setIsDone(!isDone);  새로고침을 하면 체크박스가 초기화되기 때문에 아래와 같이 수정해줌
        fetch(`http://localhost:3001/words/${word.id}`, {   // 두번째 인자로 객체를 넣어줌
            method : "PUT",
            headers : {
                "Content-Type"  : "application/json",   // Content-Type은 보내는 리소스의 타입을 의미
            },
            body : JSON.stringify({ // JSON 문자열로 변환하기 위해 stringify 사용
                ...word,    // 기존 데이터
                isDone : !isDone
            }),
        })
        .then(res=>{
            if(res.ok){
                setIsDone(!isDone);
            }
        })
    }

    function del(){
        if(window.confirm("삭제하시겠습니까?")){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method : "DELETE",  // 삭제는 특별히 어떤 정보를 넘겨줄 필요가 없기 때문에 여기 까지만 작성
            }).then(res =>{
                if(res.ok){
                    setWord({id:0});
                }
            })
        }
    }

    if(word.id === 0){
        return null;    // null을 return 해줘야 삭제된 데이터가 보이지 않는다
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
                <button onClick={del} className="btn_del">삭제</button>
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