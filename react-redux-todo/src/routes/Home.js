import React, {useState} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from "../store";


function Home({toDos, ...rest}) {
    console.log('rest:',rest)
    //rest: {history: {…}, location: {…}, match: {…}, staticContext: undefined, addToDo: ƒ}
    //addToDo: text => {…}
        // react-router로부터 받은 props외 mapDispatchToProps에서 리턴한 addToDo를 포함하고 있다.
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
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </div>
    )
}


// react redux가 지원하는 메소드 connect
// getCurrentState, getDispatchProps 함수를 정의하여 활용
    // [자세한 정리](../../README.md)

function mapStateToProps(state, ownProps){
    return {toDos : state}
}

// dispatch를 Home component에서 사용하지 않는다.
// function을 만들고, props를 만들고 있다.
// 그리고 그 function을 props로 전달한다.
function mapDispatchToProps(dispatch) {
    console.log(dispatch)
    // ƒ dispatch(action) {
    //     if (!isPlainObject(action)) { ...

    // dispatch를 리턴함으로써 connect()(Home) 컴포넌트에서 props를 바꿀 수 있는 파워 겟!
    return {
        // function 정의 부분 :
            // 이 함수는 인자 text가 필요하고, 이 함수가 실행되면 actionCreators.addToDo(text)와 함께 dispatch가 호출된다.
        addToDo : text => dispatch(actionCreators.addToDo(text))
    }
}

// mapStateProps가 불필요 할 경우 null 처리
// export default connect(null, mapDispatchProps)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);



