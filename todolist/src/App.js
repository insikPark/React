import './App.css';
import Main from './component/Main'; 
import TodoList from './component/TodoList';
import {useState} from 'react';
import {MdAddCircle} from 'react-icons/md';
import TodoInsert from './component/TodoInsert';
import './component/TodoInsert.css';

let nextId = 4; // 함수 안에 있으면 함수가 새로 리랜더링 될 때 마다 처음 값으로 돌아가기 때문

function App() {

  const [selectedTodo, setSelectedTodo] = useState(null);   // 일정 리스트 클릭 상태 유무를 파악하기 위한 useState
  const [insertToggle, setInsertToggle] = useState(false);  // 일정 등록 버튼 클릭 상태에 따른 변화를 나타내기 위한 useState
  const [todos, setTodos] = useState([                      // 현재 등록돼있는 각 일정에 대한 정보를 나타내기 위한 useState
   {
    id : 1,
    text : '할일 1',
    checked : true
   },
   {
    id : 2,
    text : '할일 2',                // 3개의 고정 값을 미리 등록 시켜 놓음
    checked : false
   },
   {
    id : 3,
    text : '할일 3',
    checked : true
   }
  ]);

  const onInsertToggle = () => {    // 일정 등록 버튼 클릭 시 실행되는 함수
    if(selectedTodo) {
      setSelectedTodo(null);        // 새로 할 일 등록 시 이전에 등록한 text가 남아있는 것을 방지하기 위해
    }
      setInsertToggle(prev => !prev); // 일정 추가 버튼 클릭시 insertToggle의 현재값을 반대(true)로 만들어 TodoInsert 컴포넌트의 다음 동작을 가능하게 함
  };

  const onInsertTodo = (text) => {  // 일정 등록 관련 함수로, data 입력 유무에 따른 결과를 다르게 나타냄
    if(text === ''){                // 일정 등록 시, 아무 data를 입력하지 않고 등록 버튼을 클릭할 경우
      return alert('할 일을 입력하세요.')
    } else {                        // 일정 등록에 필요한 정보를 올바르게 입력했을 경우
      const todo = {
        id: nextId,
        text,
        checked : false
      }
      setTodos(todos => todos.concat(todo));  // 입력한 새 일정에 대한 정보 저장
                         /* push 함수가 아닌 concat 함수를 사용한 이유는
                            push는 해당 배열 자체가 변경이 되는 반면, 
                            concat은 새 배열이 리턴되고 기존 배열은 변경이 되지 않기 때문 */
      nextId++;
                          }
  }

  const onCheckToggle = (id) => {   // 인자로 id를 받아 클릭한 toggle의 id값이 todo에 저장되어있는 id와 일치하면 todo객체의 속성을 가져와 checked의 값을 반대로 주고, 일치하지 않으면 현재 todo를 반환해줌
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }

  const onChangeSelectedTodo = (todo) => {  // 현재 일정 리스트에 나열되어 있는 item 클릭 시, 해당 item의 정보를 팝업창에 그대로 가져와 보여주기 위한 함수
    setSelectedTodo(todo);
  }

  const onRemove = (id) => {  // 삭제 버튼 클릭 시 id를 인자로 받음
    onInsertToggle(); // 삭제 시 팝업창을 닫기 위함 
    setTodos(todos => todos.filter(todo => todo.id !== id));  // filter를 이용해 todo.id가 인자로 받아온 id와 일치하지 않는 것만 리턴한다
  }

  const onUpdate = (id, text) => {  // 수정 버튼 클릭 시
    onInsertToggle(); // 삭제 시 팝업창을 닫기 위함 
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, text} : todo)))

  }

  return (
     <Main todoLength={todos.length}>
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
        {insertToggle && <TodoInsert   // 일정 등록 버튼 클릭시 insertToggle의 값이 true로 바뀌면서 다음 동작을 가능케 함.
          selectedTodo={selectedTodo} 
          onInsertToggle={onInsertToggle} 
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}/>}   {/* +버튼 클릭 시에만 나타나게 하기 위함*/}
     </Main>
  );
}

export default App;
