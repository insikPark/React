import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md";
import './TodoItem.css';

export default function TodoItem({todo, onCheckToggle}){

    const {id, text, checked} = todo;

    return (
        <div className="TodoItem">
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ? ( 
                    <MdCheckBox 
                        onClick={() => {
                            onCheckToggle(id);
                }} 
                /> 
                ) : (
                    <MdCheckBoxOutlineBlank 
                    onClick={() => {
                        onCheckToggle(id);
                    }}
                />
                )}
                <div className="text">{text}</div>
            </div>
        </div>
    )
}