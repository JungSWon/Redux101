import React, {useState} from 'react';
import {connect} from 'react-redux';

function Home(props) {
    console.log(props)
    // getCurrentState에서 return {toDos : state} 한 결과, 해당 컴포넌트(home) prop에 추가됨을 확인 할 수 있는 부분
        // {history: {…} 외 react-router로부터 받은 props.., toDos: Array(0), …}
    const [text, setText] = useState('');
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault()
        setText("");
    }

    return (
        <div>
            <h1>ToDo</h1>
            <form onSubmit={onSubmit} action="">
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <h4>아래는 전달받은 props를 raw로 확인해보았다. </h4>
            <ul>
                {JSON.stringify(props)}
            </ul>
            <h4> 전달받은 props 중 connect로 전달받은 toDos state에 접근하여 확인해보자. </h4>
            <ul>
                {JSON.stringify(props.toDos)}
            </ul>
        </div>
    )
}


// react redux가 지원하는 메소드 connect - getCurrentState
// https://react-redux.js.org/using-react-redux/connect-mapstate
    // component들을 store에 연결하여 state를 가져올 수 있도록 한다.
    // function이름은 mapStateProps로 하는 것이 규율
function mapStateProps(state, ownProps){
    // mapStateProps 첫번째 인자 : state || dispatch
        // vanilla redux의 store.getState() || store.dispatch() 와 같다.
        // state를 전달 받고 싶은지 || store나 reducer에 메세지를 전달하고 싶은지에 따라 선택
    console.log(state,ownProps) // [] {history: {…}, location: {…}, match: {…}, staticContext: undefined}
    return {toDos : state}
}

// mapStateProps에서 state를 return하여 Home component에 props로써 전달하겠다.
export default connect(mapStateProps)(Home);
