// create your App component here
import React, { Component } from 'react'; 
import Button from './components/button.js';

class App extends Component {

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
    }

    render() {
        return(
            < Button />
        )
    }


}

export default App; 