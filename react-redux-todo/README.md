
## ㄴReferenct 
### connect 
-   react redux가 지원하는 메소드 connect
- getCurrentState, getDispatchProps 함수를 정의하여 활용

#### getCurrentState
- [react-redux DOC - getCurrentState](https://react-redux.js.org/using-react-redux/connect-mapstate)
- component들을 `store`에 연결하여 `state`를 가져올 수 있도록 한다.
  
    - Vanilla Redux의 `store.getState()` 기능과 동일 
- function
    - 함수명 : `mapStateToProps`로 하는 것이 규율
    - 첫번째 인자 : `state `
- Code Example 
    ``` react
      
    function Home(props) {
        
    console.log('props:',props)
    // getCurrentState에서 return {toDos : state} 한 결과, 해당 컴포넌트(home) prop에 추가됨을 확인 할 수 있는 부분
        // {history: {…} 외 react-router로부터 받은 props.., toDos: Array(0), …}
     
    ...
    return (
            <div>
                ...
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
    ... 
    
    function mapStateToProps(state, ownProps){
        console.log(state,ownProps) 
      //[] {history: {…}, location: {…}, match: {…}, staticContext: undefined}
        return {toDos : state}
    }
    
    // mapStateProps에서 state를 return하여 Home component에 props로써 전달하겠다.
    export default connect(mapStateProps)(Home);
    
    ```
  
  
#### getDispatchProps
- [react-redux DOC - getDispatchProps](https://react-redux.js.org/using-react-redux/connect-mapdispatch)
- `store`나 `reducer`에 메세지를 전달할 수 있다. 
  
    - Vanilla Redux의 `store.dispatch()` 기능과 동일 
- function
    - 함수명 : `mapStateToProps`로 하는 것이 규율
    - 첫번째 인자 : `dispatch   `
    
- Code Example 
     ``` react 
     function Home({toDos, ...rest}) {
         console.log('rest:',rest)
         //rest: {history: {…}, location: {…}, match: {…}, staticContext: undefined, addToDo: ƒ}
         //addToDo: text => {…}
             // react-router로부터 받은 props외 mapDispatchToProps에서 리턴한 addToDo를 포함하고 있다.
    ...
     
     function mapStateToProps(state, ownProps){return {toDos : state}}
     
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
     ```
     
