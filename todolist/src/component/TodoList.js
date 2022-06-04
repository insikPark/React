import TodoItem from "./TodoItem";
import './TodoList.css';

export default function TodoList({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo}){
    
    //console.log({todos});
    
    return (       
        <div className="TodoList">
            {todos.map(todo => (
            <TodoItem 
                todo={todo} 
                key={todo.id}
                onCheckToggle={onCheckToggle}
                onInsertToggle={onInsertToggle}
                onChangeSelectedTodo={onChangeSelectedTodo}
            />   //  list를 렌더링 할 때는 key값 필요
        ))} 
        </div>    
    );
}

// TodoList는 App.js에서 todos 인자를 받아온다