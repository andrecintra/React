import React, { Component } from 'react';
import './Person.css'

class Person extends Component {
    render() {
        return (
            <div className="Person">
                <p onClick={this.props.click}>Meu nome é {this.props.name} e tenho {this.props.age}</p>
                <p>meu trabalho é {this.props.children}</p>
                <input type="text" onChange={this.props.nameChangeHandler}/>
            </div>

        );
    }
}

export default Person;
