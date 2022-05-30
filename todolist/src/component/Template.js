import './Template.css';

export default function template({children, todoLength}){   /* Template 컴포넌트 안에 TodoList 컴포넌트가 
                속해있기 때문에 이를 자식으로 여기고 인자로 받아와 표기 해줌*/

    return (
        <div className="Template">
            <div className="title">오늘의 할 일 ({todoLength})</div>
            <div>{children}</div>
        </div>
    )
}