import {createStore} from 'redux';

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO ='DELETE_TODO'


const addTodo = text => {
    return {type:ADD_TODO, text}
}

const delTodo = delId => {
    return {type:DELETE_TODO, delId}
}

const reducer = (state = [], action)=>{
    switch (action.type) {
        case ADD_TODO: return [ ...state, {text: action.text, id: Date.now()} ]
        case DELETE_TODO: return []
        default: return state
    }
}

const store = createStore(reducer);

store.subscribe(()=> console.log(store.getState()))

const paintToDos = () => {
    const toDos = store.getState()
    ul.innerHTML ='';
    toDos.forEach(toDo => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        li.id = toDo.id
        li.innerText = toDo.text
        btn.innerText = 'DEL'
        ul.appendChild(li)
        li.appendChild(btn)
        btn.addEventListener('click', onClick)
    })
}
store.subscribe(paintToDos)


const dispatchAddTodo = text =>{
    store.dispatch(addTodo(text))
}

const dispatchDelTodo = delId => {
    store.dispatch(delTodo(delId))
}

const onSubmit = e =>{
    e.preventDefault();
    const todo = input.value;
    input.value = '';
    dispatchAddTodo(todo)
}


const onClick = e =>{
    const delId = e.path[1].id
    console.log(e.path[1].id)
    dispatchDelTodo(delId)
}

form.addEventListener('submit',onSubmit);
