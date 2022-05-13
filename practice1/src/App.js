import './App.css';
import './component/Hello';  //.js 생략 가능
//import Hello from './component/Hello';  // Hello.js 만들고 App.js로 넘어와서 Hello 컴포넌트를 임포트 시켜주고 아래 function App 에서 한번 더 표기해줌
import Hello2 from './component/Hello2';
import Welcome from './component/Welcome';
import styles from './App.module.css';
//import Hello from './component/Hello';
import './component/UserName';

function App(){
  return ( 
    <div className="App">
    
      <Hello2 age={20}></Hello2> 
      <br></br>
      <hr></hr>      
      <Hello2 age={10}/>
      <Welcome />
    
  {/* <div className="box">App</div>

</div> */}
  <div className= {styles.box}>App</div>

  </div>
 
  );
}
// function App() { // 모든 컴포넌트는 대문자로 시작해야함
  
//   const name = "insik";
  
//   const naver = {
//     name : "네이버",
//     url : "https://naver.com",
//   };

//   return (
//     <div className="App">
//      <h1 
//      style={{
//       color: "#ff0",
//       backgroundColor:"green"
//      }}
// >
//   Hello {name}
//   <br></br>
//   <a href={naver.url}>{naver.name}</a>
  
//   <p>{2 + 3}</p>
//   </h1>
//       </div>
//   );
// }

export default App;
