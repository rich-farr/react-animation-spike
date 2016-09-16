import React, { Component } from 'react'

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var TodoList = React.createClass({

  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
    this.state.items.concat([prompt('Enter summat')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
        {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={false}
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
})

export default TodoList
