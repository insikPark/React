// const Hello = function(){
//     <p>Hello</p>
// }        
// 아래와 같은 표현(방법 1) 

import World from "./World";

//import "./Hello.css"
import styles from "./Hello.module.css";

    const Hello = () => {
      return (
      <div>
      <h3 style ={{
        color : "#f00",
        borderRight : "12px solid #000",
        marginBottom : "10px",
        opacity : 1,
      }}
    >Hello</h3>
      <World />    

      {/* <div className="box">Hello</div>

      </div> */}

    <div className={styles.box}>Hello</div>

      </div>

      )
    }; //(방법 2)

    // 지금 Hello 컴포넌트 안에 Welcome 컴포넌트가 들어있는 상태
    // div 태그를 넣어 영역을 지정해줘야됨!

export default Hello;

// export default function Hello(){
//    return <p>Hello</p>;
// } 
// 위 표현을 하나로 아우르는 같은 표현(방법 3)