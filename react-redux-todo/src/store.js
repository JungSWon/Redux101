import {createStore} from 'redux';

const ADD ='ADD';
const DELETE = 'DELETE';

const addTodo = (text) => {
    return {type:ADD, text}
}

const delTodo = delId => {
    return {type:DELETE, delId}
}

const reducer = (state=[], action)=>{
    switch (action.type) {
        case ADD:
            return [{text: action.text, id:Date.now()}, ...state]
        case DELETE:
            return state.filter(todo => todo.id !== action.delId)
        default:
            return state
    }

}
const store = createStore(reducer)

// action fucntion마다 export const를 하지 않고 아래처럼 갈무리 할 수 있다.
export const actionCreators = {
    addTodo,
    delTodo
}


export default store
