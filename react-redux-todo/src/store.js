import {createStore} from 'redux';

const ADD ='ADD';
const DELETE = 'DELETE';

export const addTodo = (text) => {
    return {type:ADD, text}
}

export const delTodo = delId => {
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

export default store
