import React, { Component } from 'react'
import Nav from './nav'
import TodoList from './todoList'

class App extends React.Component {

  render () {
    return (
      <div id="container">
        <Nav title="React Transitions are Kool"/>
        <TodoList/>
        {this.props.children}
      </div>
    )
  }

}

export default App
