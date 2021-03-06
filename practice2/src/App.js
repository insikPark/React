import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />     {/*Header는 모든 페이지에서 다 나타나야 하므로 Header 밑에 Switch 적용*/}
        <Routes>
          <Route exact path="/" element = {<DayList/>} />
          <Route path="/day/:day" element = {<Day />} />   
          <Route path="/create_word" element = {<CreateWord/>} />
          <Route path="/create_day" element = {<CreateDay/>} />
          <Route path="*" element = {<EmptyPage />} />          
        </Routes>
      </div>    
    </BrowserRouter>
  );
}

export default App;
