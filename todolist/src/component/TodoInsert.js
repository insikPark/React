import { useEffect, useState } from 'react';
import {MdAddCircle} from 'react-icons/md';
import './TodoInsert.css';
import {TiPencil, TiTrash} from 'react-icons/ti';

export default function TodoInsert({onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate}){

    const [value, setvalue] = useState('');

    const onChange = (e) => {
        setvalue(e.target.value);   // 일정을 등록하세요 팝업에 새로운 일정을 등록시 새로운 값이 저장됨
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);        // 저장된 새로운 값을 onInsertTodo 함수에 넣어 등록함
        setvalue('');               // 일정 제목 입력 후 저장시 남아있는 제목을 초기화 시켜줌
        onInsertToggle();           // 팝업창 닫기
    }

    useEffect(() => {
        if(selectedTodo){
            setvalue(selectedTodo.text);
        }
    }, [selectedTodo]); // 의존성을 위해 두번째 인자 배열에 selectedTodo를 넣어줌

    return(
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id, value)} : onSubmit}>
                <input placeholder='일정을 입력하세요.' value={value} onChange={onChange}></input>
                {selectedTodo ? (
                <div className='rewrite'>
                    <TiPencil onClick={() => {onUpdate(selectedTodo.id, value)}}/>
                    <TiTrash onClick={() => {onRemove(selectedTodo.id)}}/>
                </div>
               ) : <button type="submit">
                    <MdAddCircle/>
                   </button>}
            </form>
        </div>
    )
}