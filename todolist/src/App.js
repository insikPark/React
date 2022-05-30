import './App.css';
import Template from './component/Template'; 
import TodoList from './component/TodoList';
import {useState} from 'react';

function App() {

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

  return (
     <Template>
       <TodoList todos = {todos}/>   {/*Template 컴포넌트 사이에 있는 TodoList 컴포넌트를
        나타내기 위해 Template 컴포넌트에서 children이라는 인자로 받아 사용*/}
     </Template>
  );
}

export default App;
