import React, { Component } from 'react';

class ValidationComponent extends Component {

  render() {

    let texto = "Texto muito pequeno";
    if (this.props.textLenght > 5) {
        texto = "Texto de tamamnho bom"
    }

    return (
      <div>
        <p>{texto}</p>
      </div>
    );
  }
}

export default ValidationComponent;
