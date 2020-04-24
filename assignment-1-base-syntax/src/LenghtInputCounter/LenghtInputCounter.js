import React, { Component } from 'react';

class LenghtInputCounter extends Component {

  render() {
    return (
      <div>
        <p>Tamanho do texto: {this.props.textLength}</p>
        <input type="text" onChange={this.props.textLengthHandler} value={this.props.value}/>
      </div>
    );
  }
}

export default LenghtInputCounter;
