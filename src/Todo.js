import React, { Component, PropTypes } from 'react'

class ToDoList extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  createAddTodoAction = (text) => ({
    type: 'ADD_TODO',
    text,
  })

  removeTodoAction = (index) =>({
    type: 'REMOVE_TODO',
    index,
  })

  onSubmit = e => {
    e.preventDefault()
    const {
      createAddTodoAction,
      props: { dispatch},
      refs: { todoHolder }
    } = this

    const addTodoAction = createAddTodoAction(todoHolder.value)

    dispatch(addTodoAction)
    todoHolder.value = ''
  }

  deleteText = (index) =>{
    const {
      removeTodoAction,
      props: { dispatch},
    } = this
    const removeList = removeTodoAction(index)
    dispatch(removeList)
  }

  render() {
    const {
      onSubmit,
      deleteText,
      props: { text}
    } = this

   const todos = arr => arr.map(
      (todo, index) =>
        <div key={index}>
          <ul>
            <li>{todo.text}<button onClick={() => deleteText(index)}>X</button></li>
          </ul>
        </div>
    )

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" ref="todoHolder" />
          <button type="submit">Submit</button>
        </form>
        {todos(text)}
      </div>
    )
  }
}

export default ToDoList
