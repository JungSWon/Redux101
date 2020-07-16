
// 우선 react를 사용하지 않고, Vanilla Javascript 로 Redux를 사용해 볼 예정이므로
// App.js와 index.js는 비우고 시작하자.

import './index.css';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);