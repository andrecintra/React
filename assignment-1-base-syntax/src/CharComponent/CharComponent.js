import React, { Component } from 'react';
import "./CharComponent.css"

class CharComponent extends Component {

  render() {

    return (
      <div className="charComponent">
        <p onClick={this.props.click}>{this.props.char}</p>
      </div>
    );
  }
}

export default CharComponent;
