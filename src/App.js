// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    people: []
  }

  componentDidMount() {
    const url = "http://api.open-notify.org/astros.json"
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        people: data.people
      })
    })
  }

  showPeople = () => {
    return this.state.people.map(person => {
      return (
        <div>{person.name}</div>
      )
    })
  }


  render() {
    console.log(this.state.people)
    return (
      <div>
        {this.showPeople()}
      </div>
    )
  }
}
