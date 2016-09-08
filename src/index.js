import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Todo from './Todo';
import todoReducer from './todoReducer'

const store = createStore(todoReducer)



const getInputValue = text => {
  store.dispatch(text)

}

const render =() => {
  function todos (arr) {

    return arr.map(
    (todo, index) => <div key={index}>
      <ul> <li>{todo.text}</li> </ul>
    </div>
    )

  }
  ReactDOM.render(
    <Todo text = {todos(store.getState())} addTodoList={getInputValue}
  />,
    document.getElementById('root')
  )
}



// addTodoList = e => {
//   const {toDoHolder} = this.refs
//   e.preventDefault()
//   const ob1 = {
//     type: 'ADD_TODO',
//     text: toDoHolder.value
//   }
//   store.dispatch(ob1)
//   console.log(store.getState())
// }

render()
store.subscribe(render)

