import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';
import LenghtInputCounter from './LenghtInputCounter/LenghtInputCounter';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import uuid from 'react-uuid'

class App extends Component {

  state = {
    person: {
      name: "André"
    },
    textLength: 0,
    inputTextArray: []
  }

  nameInputHandler = (event) => {
    this.setState({
      person: {
        name: event.target.value
      }
    })
  }

  textLengthHandler = (event) => {
    this.setState(
      {
        textLength: event.target.value ? event.target.value.length : 0,
        inputTextArray: event.target.value.split("")
      }
    )
  }

  removeElementFromArray (index){
    const arrayToRemove = [...this.state.inputTextArray];

    arrayToRemove.splice(index, 1);

    this.setState({inputTextArray: arrayToRemove})
  }

  render() {
    return (
      <div className="App">
        <UserInput nameInputHandler={this.nameInputHandler}  name={this.state.person.name}/>
        <br />
        <UserOutput name={this.state.person.name} />
        <br />
        <LenghtInputCounter textLengthHandler={this.textLengthHandler} textLength={this.state.textLength} value={this.state.inputTextArray.join("")}/>
        <br />
        <ValidationComponent textLenght={this.state.textLength} />
        <br />
        {
          this.state.inputTextArray.map((char, index) => {
            return <CharComponent char={char} click={() => this.removeElementFromArray(index)} key={uuid()}/>
          })
        }
      </div>
    );
  }
}

export default App;
