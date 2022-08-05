import './App.css';
import React, { Component } from 'react';
import Info from './components/Info';
import Experience from "./components/Experience";
import uniqid from 'uniqid';

class App extends Component {
  constructor(){
    super();
    this.state = {
      info: {
        name: 'John Doe',
        address1: '123 Main Street',
        address2: 'Anytown, USA 12345',
        phone: '(123)456-7890',
        email: 'johndoe@email.com',
        linkedIn: 'johndoe123',
        gitHub: 'johndoe123',
      },
      experience: {
        company: '',
        title: '',
        start: '',
        end: '',
        description: '' 
      },
      experiences: [
        {
          title: 'Senior Meat Associate',
          company: "Satriale's Pork Store",
          start: 'January 1999',
          end: 'June 2007',
          description: `Cut meat, talk to customers, take it ease, `+ 
                        `cut meat, talk to customers, take it ease, `+
                        `cut meat, talk to customers, take it ease, `+
                        `cut meat, talk to customers, take it ease, `+
                        `cut meat, talk to customers, take it ease, `+
                        `cut meat, talk to customers, take it ease, `,
        }
      ]

    }
  }

  handleInfoChange = (event) => {
    const infoKey = event.target.id;
    
    const tempState = this.state.info;
    delete tempState[infoKey]
    tempState[infoKey] = event.target.value;

    this.setState({
      info : tempState
    })
  }

  handleExpChange = (index, event) => {
    const key = event.target.getAttribute('data-key')    
    const updatedValue = event.target.value
    //console.log(this.state.experiences[index][key])

    const tempExperiences = this.state.experiences;
    delete tempExperiences[index][key]
    tempExperiences[index][key] = updatedValue;
    
    this.setState({
      experiences: tempExperiences
    })
  }

  addExperience = () => {
    const experience = {
      company: '',
      title: '',
      start: '',
      end: '',
      description: '' 
    }

    const tempExperiences = this.state.experiences;
    tempExperiences.push(experience);
    this.setState({
      experiences : tempExperiences
    })

  }

  render(){
    const {info, experiences} = this.state;

    return (
      <div className="resume-container">

        <div className="resume-inputs">

          <fieldset className="personal-info">
            <legend>Personal Information</legend>
              <p>
                <label htmlFor="name">Name:</label>
                <input 
                  onChange={this.handleInfoChange}
                  type="text" 
                  id="name"
                  value={info.name}
                />
              </p>

              <p>
                <label htmlFor="address1">Address:</label>
                <input 
                  onChange={this.handleInfoChange}
                  type="text" 
                  id="address1"
                  value={info.address1}
                />
              </p>

              <p>
                <label htmlFor="address2"></label>
                <input 
                  onChange={this.handleInfoChange}
                  type="text" 
                  id="address2"
                  value={info.address2}
                />
              </p>

              <p>
                <label htmlFor="phone">Phone:</label>
                <input 
                  onChange={this.handleInfoChange}
                  type="text" 
                  id="phone"
                  value={info.phone}
                />
              </p>

              <p>
                <label htmlFor="email">Email:</label>
                <input 
                  onChange={this.handleInfoChange}
                  type="text" 
                  id="email"
                  value={info.email}
                />
              </p>

              <p>
                <label htmlFor="linkedIn">LinkedIn:</label>
                <input 
                  onChange={this.handleInfoChange}
                  type="text" 
                  id="linkedIn"
                  value={info.linkedIn}
                />
              </p>

              <p>
                <label htmlFor="gitHub">GitHub:</label>
                <input 
                  onChange={this.handleInfoChange}
                  type="text" 
                  id="gitHub"
                  value={info.gitHub}
                />
              </p>
            
          </fieldset>



          <fieldset className="experiences">
            <legend>Experiences</legend>

            {this.state.experiences.map((experience, index) => {
              return(
                <div key={index}>

                  <div className="experience-input-row">
                    <div className="experience-input-container">
                      <label htmlFor="experience-input-title">Title:</label>
                      <input 
                        type="text" 
                        id="experience-input-title"
                        placeholder={experience.title}
                        data-key = 'title'
                        onChange={event => this.handleExpChange(index, event)}
                      />
                    </div>
                    
                    <div className="experience-input-container">
                      <label htmlFor="experience-input-company">Company:</label>
                      <input 
                        type="text" 
                        id="experience-input-company"
                        placeholder={experience.company}
                        data-key = 'company'
                        onChange={event => this.handleExpChange(index, event)}
                      />
                    </div>
                  </div>

                  <div className="experience-input-row">
                    <div className="experience-input-container">
                      <label htmlFor="experience-input-start">Start Date:</label>
                      <input 
                        type="text" 
                        id="experience-input-start"
                        placeholder={experience.start}
                        data-key = 'start'
                        onChange={event => this.handleExpChange(index, event)}
                      />
                    </div>

                    <div className="experience-input-container">
                      <label htmlFor="experience-input-end">End Date:</label>
                      <input 
                        type="text" 
                        id="experience-input-end"
                        placeholder={experience.end}
                        data-key = 'end'
                        onChange={event => this.handleExpChange(index, event)}
                      />
                    </div>
                  </div>
                  
                  <div className="experience-input-description-container">
                    <label htmlFor="experience-input-description">Description:</label>
                    <textarea 
                      id="experience-input-description"
                      placeholder={experience.description}
                      data-key = 'description'
                      onChange={event => this.handleExpChange(index, event)}
                    >
                    </textarea>
                  </div>


                </div>
              )
            })}

            <button onClick={this.addExperience}>Add More</button>
      {/*
                  <div className="experience-input-row">
                    <div className="experience-input-container">
                      <label htmlFor="experience-input-title">Title:</label>
                      <input 
                        type="text" 
                        id="experience-input-title"
                      />
                    </div>
                    
                    <div className="experience-input-container">
                      <label htmlFor="experience-input-company">Company:</label>
                      <input 
                        type="text" 
                        id="experience-input-company"
                      />
                    </div>
                  </div>

                  <div className="experience-input-row">
                    <div className="experience-input-container">
                      <label htmlFor="experience-input-start">Start Date:</label>
                      <input 
                        type="text" 
                        id="experience-input-start"
                      />
                    </div>

                    <div className="experience-input-container">
                      <label htmlFor="experience-input-end">End Date:</label>
                      <input 
                        type="text" 
                        id="experience-input-end"
                      />
                    </div>
                  </div>
                  
                  <div className="experience-input-description-container">
                    <label htmlFor="experience-input-description">Description:</label>
                    <textarea id="experience-input-description"></textarea>
                  </div>
        */}


          </fieldset>



        </div>

        <div className="resume-render">
          <Info info={info}/>
          <Experience experiences={experiences}/>
        </div>
      </div>
    );
  }
}

export default App;
