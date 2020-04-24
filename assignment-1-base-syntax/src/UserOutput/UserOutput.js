import React, { Component } from 'react';

class UserOutput extends Component {

  render() {
    return (
      <div>
        <p>Meu nome é {this.props.name}</p>
        <p>My name is {this.props.name}</p>
      </div>
    );
  }
}

export default UserOutput;
