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

  handleInfoChange = (event) => {
    const infoKey = event.target.id;
    
    this.setState({
      info[infoKey] = event.target.value,
    })
    console.log(this.state.info[infoKey])
  }


  render(){
    return (
      <div className="App">
        <div className="user-inputs">
          <form > {/*</div>onSubmit={this.onSubmitTask}>*/}
            <label htmlFor="name">Name:</label>
            <input 
              onChange={this.handleInfoChange}
              type="text" 
              id="name"
            />
            
            
          </form>


        </div>

        <div className="resume-render">
          <Info />
        </div>
      </div>
    );
  }
}

export default App;
