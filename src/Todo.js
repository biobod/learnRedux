import React, { Component, PropTypes } from 'react'

class ToDoList extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  createAddTodoAction = text => ({
    type: 'ADD_TODO',
    text,
  })

  onSubmit = e => {
    e.preventDefault()

    const {
      createAddTodoAction,
      props: { dispatch },
      refs: { todoHolder }
    } = this

    const addTodoAction = createAddTodoAction(todoHolder.value)

    dispatch(addTodoAction)
    todoHolder.value = ''
  }

  render() {
    const {
      onSubmit,
      props: { text }
    } = this

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" ref="todoHolder" />
          <button type="submit">Submit</button>
        </form>
        {text}
      </div>
    )
  }
}

export default ToDoList
