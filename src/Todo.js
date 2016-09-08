import React, { Component, PropTypes } from 'react'




class ToDoList extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit = e => {
    e.preventDefault()
    const { addTodoList } = this.props
    const object = {
      type: 'ADD_TODO',
      text: this.refs.toDoHolder.value
    }
    addTodoList(object)
    this.refs.toDoHolder.value = ''
  }

  render(){
    const {text} = this.props
    return (

        <div>
          <form onSubmit={this.onSubmit}>
            <input type="text" ref="toDoHolder" />
            <button type="submit">Submit</button>
          </form>
        {text}
        </div>
    )
  }
}



export default ToDoList
