import './App.css';
import React, { Component } from 'react';
import Info from './components/Info'

class App extends Component {
  constructor(){
    super();
    this.state = {
      info: {
        name: '',
        phone: '',
        email: '',
        linkedIn: '',
        gitHub: '',
      }
    }
  }


  render(){
    return (
      <div className="App">
        <div className="user-inputs"></div>

        <div className="resume-render">
          <Info />
        </div>
      </div>
    );
  }
}

export default App;
