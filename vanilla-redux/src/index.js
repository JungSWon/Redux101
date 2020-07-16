
// 우선 react를 사용하지 않고, Vanilla Javascript 로 Redux를 사용해 볼 예정이므로
// App.js와 index.js는 비우고 시작하자.

import './index.css';
import {createStore} from "redux";
// store란? state라는 data를 넣는 곳
  // redux 존재의 이유가 여기에 있다 : data를 관리하기 위해 만들어졌다.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = 'ADD';
const MINUS = 'MINUS';

// if(action=='add'){}else if(action=='minus'){} 대신
    // redux가 지원하는 switch구문을 사용할 수 있다. 깔-끔
    // 공식문서 : https://redux.js.org/basics/reducers
const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count +1
        case MINUS:
            return count -1
        default: return count
    }
};

// createStore가 요구하는 파라미터 : reducer  : 그리고 그것은 함수여야 한다!!
const countStore = createStore(countModifier)

const onChange = () => {
    number.innerText = countStore.getState()
}

// change를 store에서 감지하여 뭔가를 하고 싶다면, 구독! subscribe.
countStore.subscribe(onChange)

const handleAdd = () => {
    countStore.dispatch({type:ADD})
    // action object property는 반드시 type 이어야 한다.
    // action type은 UPPER_CASE가 네이밍룰
}
const handleMinus = () => {
    countStore.dispatch({type:MINUS})
}

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)