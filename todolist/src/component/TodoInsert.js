import { useState } from 'react';
import {MdAddCircle} from 'react-icons/md';
import './TodoInsert.css';

export default function TodoInsert({onInsertToggle, onInsertTodo}){

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

    return(
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={onSubmit}>
                <input placeholder='enter...' value={value} onChange={onChange}></input>
                <button type="submit"><MdAddCircle/></button>
            </form>
        </div>
    )
}