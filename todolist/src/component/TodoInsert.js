import { useEffect, useState } from 'react';
import {MdAddCircle} from 'react-icons/md';
import './TodoInsert.css';
import {TiPencil, TiTrash} from 'react-icons/ti';

export default function TodoInsert({onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate}){

    const [value, setvalue] = useState('');

    const onChange = (e) => {
        setvalue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setvalue('');
        onInsertToggle();
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
                <input placeholder='enter...' value={value} onChange={onChange}></input>
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