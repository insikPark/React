import TodoItem from "./TodoItem";

export default function TodoList({todos}){
    
    console.log({todos});
    
    return (       
        <div>
            {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id}/>   //  list를 렌더링 할 때는 key값 필요
        ))} 
        </div>
    
    );
}

// TodoList는 App.js에서 todos 인자를 받아온다