// create your App component here
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      astronauts: []
    }
  }

  render(){
    console.log( this.state.astronauts)
    return(
      <div>
        {this.state.astronauts.map((astronaut) => <p>{astronaut.name}</p>)}
      </div>
    );
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(data => this.setState({astronauts: data.people}))

  }


}

export default App;
