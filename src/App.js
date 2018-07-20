// create your App component here
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peopleInSpace: [],
    }
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => this.setState({
        peopleInSpace: data.people,
      },() => console.log(this.state)))
  }

  renderPeopleInSpace = () => {
    return this.state.peopleInSpace.map(people => {
      return (
        <h1>{people.name}</h1>
      )
    })
  }

  render() {
    return (
      <div>{this.renderPeopleInSpace()}</div>
    )
  }
}

export default App;
