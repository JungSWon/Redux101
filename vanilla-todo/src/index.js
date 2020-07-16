import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const createTodo = todo => {
    const li = document.createElement('li');
    ul.appendChild(li)
    li.innerText = todo;
}

const onSubmit = e =>{
    e.preventDefault();
    const todo = input.value;
    input.value = '';
    createTodo(todo)
}

form.addEventListener('submit',onSubmit);