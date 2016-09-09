import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Todo from './Todo';
import todoReducer from './todoReducer'

const store = createStore(todoReducer)

const dispatch = action => {
  store.dispatch(action)
}

const todos = arr => arr.map(
  (todo, index) =>
    <div key={index}>
      <ul>
        <li>{todo.text}</li>
      </ul>
    </div>
)

const render = () => {
  ReactDOM.render(
    <Todo
      text={todos(store.getState())}
      dispatch={dispatch}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)

