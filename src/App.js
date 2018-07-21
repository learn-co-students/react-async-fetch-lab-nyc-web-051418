// create your App component here
import React, { Component } from 'react';

 export default class App extends Component {

   constructor(){
     super()
     this.state={
       name:[]
     }
   }

   componentDidMount(){
     console.log("Hi")
     fetch( "http://api.open-notify.org/astros.json").then(r=>r.json())
     .then(data=>{
       const peopleName=data.people
       console.log(peopleName)
        this.setState({
         name: peopleName,
       })
       })
   }



 render() {
   console.log(this.state)
return (
  <div>
  hi
  </div>)
 }
 }
