import './App.css';
import Template from './component/Template'; 
import TodoList from './component/TodoList';
import {useState} from 'react';
import {MdAddCircle} from 'react-icons/md';
import TodoInsert from './component/TodoInsert';
import './component/TodoInsert.css';

let nextId = 4; // 함수 안에 있으면 함수가 새로 리랜더링 될 때 마다 처음 값으로 돌아가기 때문

function App() {

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insetToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
   {
    id : 1,
    text : '할일 1',
    checked : true
   },
   {
    id : 2,
    text : '할일 2',
    checked : false
   },
   {
    id : 3,
    text : '할일 3',
    checked : true
   }
  ]);

  const onInsertToggle = () => {
    if(selectedTodo) {
      setSelectedTodo(null);  // 새로 할 일 등록 시 이전에 등록한 text가 남아있는 것을 방지하기 위해
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = (text) => {
    if(text === ''){
      return alert('할 일을 입력하세요.')
    } else {
      const todo = {
        id: nextId,
        text,
        checked : false
      }
      setTodos(todos => todos.concat(todo)); /* push 함수가 아닌 concat 함수를 사용한 이유는
                            push는 해당 배열 자체가 변경이 되는 반면, 
                            concat은 새 배열이 리턴되고 기존 배열은 변경이 되지 않기 때문 */
      nextId++;
                          }
  }

  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  }

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));  // filter를 이용해 todo.id가 인자로 받아온 id와 일치하지 않는 것만 리턴한다
  }

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, text} : todo)))

  }

  return (
     <Template todoLength={todos.length}>
       <TodoList 
        todos = {todos} 
        onCheckToggle={onCheckToggle} 
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
        />   {/*Template 컴포넌트 사이에 있는 TodoList 컴포넌트를
        나타내기 위해 Template 컴포넌트에서 children이라는 인자로 받아 사용*/}
        
        <div className='add-todo-button' onClick={onInsertToggle}>
         <MdAddCircle/>
        </div>
        {insetToggle && <TodoInsert 
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle} 
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}/>}   {/*+버튼 클릭 시에만 나타나게 하기 위함*/}
     </Template>
  );
}

export default App;
