import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 30 },
      { name: "Andre", age: 28 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName0, newName1) => {

    this.setState({
      persons: [
        { name: newName0, age: 35 },
        { name: newName1, age: 29 }
      ]
    })
  }

  nameChangeHandler = (event) => {

    this.setState({
      persons: [
        { name: event.target.value, age: 35 },
        { name: "Old", age: 29 }
      ]
    })
  }

  switchShowPersons = () => {

    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }


  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, "Maxx!!", "Andre!!")} nameChangeHandler={this.nameChangeHandler}>Desenvolvedor</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Maxx!!", "Andre!!")}>Desenvolvedor</Person>
      </div>
      )
    }

    return (
      <div className="App">
        <h1>Teste React App</h1>
        <button onClick={this.switchNameHandler.bind(this, "Maximilian", "Andre Cintra")}>Mudar nome</button>
        <button onClick={this.switchShowPersons}>Mostrar pessoas</button>
        { persons }
      </div>
    );
  }
}

export default App;
