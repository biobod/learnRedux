import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { createStore } from 'redux'
import counter from './reducer.js'

const store = createStore(counter)
const render =() => {
  ReactDOM.render(
    <Counter value={store.getState()}
      onIncrement = {()=> store.dispatch({type: 'INCREMENT'})}
      onDecrement = {()=> store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)