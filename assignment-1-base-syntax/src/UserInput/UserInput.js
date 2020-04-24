import React, { Component } from 'react';

class UserInput extends Component {

  render() {
    return (
      <div>
        <input type="text" onChange={this.props.nameInputHandler} value={this.props.name}/>
      </div>
    );
  }
}

export default UserInput;
