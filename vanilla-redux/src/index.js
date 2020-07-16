
// 우선 react를 사용하지 않고, Vanilla Javascript 로 Redux를 사용해 볼 예정이므로
// App.js와 index.js는 비우고 시작하자.

import './index.css';
import {createStore} from "redux";
// store란? state라는 data를 넣는 곳
  // redux 존재의 이유가 여기에 있다 : data를 관리하기 위해 만들어졌다.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// data를 modify(수정)하는 함수 : App의 data를 리턴한다.
    // 이구역에 data를 바꿀수 있는건 countModifier뿐!
const countModifier = (count = 0 ) => {

    return count
};

// createStore가 요구하는 파라미터 : reducer 주기 : 그리고 그것은 함수여야 한다!!
const store = countStore(countModifier)

