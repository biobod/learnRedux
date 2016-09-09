import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Todo from './Todo';
import todoReducer from './todoReducer'

const store = createStore(todoReducer)

const dispatch = action => {
  store.dispatch(action)
}

const render = () => {
  ReactDOM.render(
    <Todo
      text={store.getState()}
      dispatch={dispatch}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)

