// create your App component her
import React, { Component, Fragment } from 'react';
import UUID from 'uuid'

class App extends Component {

    state = {
        r: ""
    }

    display = () => {
        return this.state.r === "" ? 
            "hi"
        :
            <Fragment>
                <h1>{this.state.r.number} astronauts</h1>
                <ul>
                {this.state.r.people.map( astronaut =>  <li key={UUID()}>{astronaut.name}</li>)}
                </ul>
            </Fragment>
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json").then(r => r.json()).then(r => this.setState({r}))
    }

    render() {
        return (
            <div>
                {this.display()}
            </div>
        );
    }
}

export default App;
