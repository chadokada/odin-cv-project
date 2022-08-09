import './App.css';
import React, { Component } from 'react';
import Info from './components/Info';
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
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
      ],
      educations: [
        {
          degree: 'Bachelor of Science',
          major: 'Sanitation Science',
          school: "Rutger's University",
          start: '1996',
          end: '1999',
        },
        {
          degree: 'Fullstack JavaScript',
          major: '',
          school: "The Odin Project",
          start: '2007',
          end: '2008',
        }
      ],
      skills: [
        'JavaScript', 'HTML', 'CSS', 'React', 'Python', 'Django', 'Banjo'
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

  removeExperience = (index) => {
    const tempExperiences = this.state.experiences;
    tempExperiences.splice(index, 1);
    
    this.setState({
      experiences: tempExperiences
    })
  }

  handleEduChange = (index, event) => {
    const key = event.target.getAttribute('data-key')    
    const updatedValue = event.target.value

    const tempEducations = this.state.educations;
    delete tempEducations[index][key]
    tempEducations[index][key] = updatedValue;
    
    this.setState({
      educations: tempEducations
    })
  }

  addEducation = () => {
    const education = {
      degree: '',
      major: '',
      school: '',
      start: '',
      end: '' 
    }
    const tempEducations = this.state.educations;
    tempEducations.push(education);

    this.setState({
      educations : tempEducations
    })

  }

  removeEducation = (index) => {
    const tempEducations = this.state.educations;
    tempEducations.splice(index, 1);
    
    this.setState({
      educations: tempEducations
    })
  }

  handleSkillChange = (index, event) => {
    const updatedValue = event.target.value

    const tempSkills = this.state.skills;
    tempSkills[index] = updatedValue;

    this.setState({
      skills: tempSkills
    })
  }

  addSkill = () => {
    const skill = '';
    const tempSkills = this.state.skills;
    tempSkills.push(skill);

    this.setState({
      skills: tempSkills
    })
  }

  removeSkill = (index) => {
    const tempSkills = this.state.skills;
    tempSkills.splice(index, 1);

    this.setState({
      skills: tempSkills
    })
  }

  render(){
    const {info, experiences, educations, skills} = this.state;

    return (
      <div className="resume-container">

        <div className="resume-inputs">
          <fieldset className="personal-info">
            <legend>Personal Information</legend>
            <div className="personal-info-input-container">

              <div className="input-row info">
                <div className="personal-info-input">
                  <label htmlFor="name">Name:</label>
                  <input 
                    onChange={this.handleInfoChange}
                    type="text" 
                    id="name"
                    value={info.name}
                  />
                </div>
                <div className="personal-info-input">
                  <label htmlFor="email">Email:</label>
                  <input 
                    onChange={this.handleInfoChange}
                    type="text" 
                    id="email"
                    value={info.email}
                  />
                </div>
              </div>

              <div className="input-row info">
                <div className="personal-info-input">
                  <label htmlFor="address1">Address:</label>
                    <input 
                      onChange={this.handleInfoChange}
                      type="text" 
                      id="address1"
                      value={info.address1}
                    />
                </div>
                <div className="personal-info-input">
                  <label htmlFor="linkedIn">LinkedIn:</label>
                  <input 
                    onChange={this.handleInfoChange}
                    type="text" 
                    id="linkedIn"
                    value={info.linkedIn}
                  />
                </div>
              </div>

              <div className="input-row info">
                <div className="personal-info-input">
                  <label htmlFor="address2"></label>
                    <input 
                      onChange={this.handleInfoChange}
                      type="text" 
                      id="address2"
                      value={info.address2}
                    />
                </div>
                <div className="personal-info-input">
                  <label htmlFor="gitHub">GitHub:</label>
                  <input 
                    onChange={this.handleInfoChange}
                    type="text" 
                    id="gitHub"
                    value={info.gitHub}
                  />
                </div>
              </div>

              <div className="input-row info">
                <div className="personal-info-input">
                  <label htmlFor="phone">Phone:</label>
                  <input 
                    onChange={this.handleInfoChange}
                    type="text" 
                    id="phone"
                    value={info.phone}
                  />
                </div>
              </div>
            </div>
          </fieldset>
          
          <fieldset className="experiences">
            <legend>Experiences</legend>

            {this.state.experiences.map((experience, index) => {
              return(
                <div className="experience-input-container" key={index}>
                  <div className="input-row experience">
                    Experience {index+1}
                    <i 
                      className="fa-solid fa-xmark"
                      onClick={event => this.removeExperience(index)}
                    >
                    </i>
                  </div>
                  <div className="input-row experience">
                    <div className="experience-input">
                      <label htmlFor="experience-input-title">Title:</label>
                      <input 
                        type="text" 
                        id="experience-input-title"
                        placeholder={experience.title}
                        data-key = 'title'
                        onChange={event => this.handleExpChange(index, event)}
                      />
                    </div>
                    
                    <div className="experience-input">
                      <label htmlFor="experience-input-start">Start Date:</label>
                      <input 
                        type="text" 
                        id="experience-input-start"
                        placeholder={experience.start}
                        data-key = 'start'
                        onChange={event => this.handleExpChange(index, event)}
                      />
                    </div>
                  </div>

                  <div className="input-row experience">
                    <div className="experience-input">
                      <label htmlFor="experience-input-company">Company:</label>
                      <input 
                        type="text" 
                        id="experience-input-company"
                        placeholder={experience.company}
                        data-key = 'company'
                        onChange={event => this.handleExpChange(index, event)}
                      />
                    </div>
                    <div className="experience-input">
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
            <div className="input-button-row">
              <button onClick={this.addExperience}>Add</button>
            </div>
          </fieldset>

          <fieldset className="educations">
            <legend>Education</legend>

            {this.state.educations.map((education, index) => {
              return(
                <div className="education-input-container" key={index}>
                  <div className="input-row education">
                    Education {index+1}
                    <i 
                      className="fa-solid fa-xmark"
                      onClick={event => this.removeEducation(index)}
                    >
                    </i>
                  </div>
                  <div className="input-row education">
                    <div className="education-input">
                      <label htmlFor="education-input-degree">Degree:</label>
                      <input 
                        type="text" 
                        id="education-input-degre"
                        placeholder={education.degree}
                        data-key = 'degree'
                        onChange={event => this.handleEduChange(index, event)}
                      />
                    </div>

                    <div className="education-input">
                      <label htmlFor="education-input-start">Start Date:</label>
                      <input 
                        type="text" 
                        id="education-input-start"
                        placeholder={education.start}
                        data-key = 'start'
                        onChange={event => this.handleEduChange(index, event)}
                      />
                    </div>
                  </div>

                  <div className="input-row education">
                    <div className="education-input">
                      <label htmlFor="education-input-major">Major:</label>
                      <input 
                        type="text" 
                        id="education-input-major"
                        placeholder={education.major}
                        data-key = 'major'
                        onChange={event => this.handleEduChange(index, event)}
                      />
                    </div>
                    <div className="education-input">
                      <label htmlFor="education-input-end">End Date:</label>
                      <input 
                        type="text" 
                        id="education-input-end"
                        placeholder={education.end}
                        data-key = 'end'
                        onChange={event => this.handleEduChange(index, event)}
                      />
                    </div>
                  </div>

                  <div className="input-row education">
                    <div className="education-input">
                      <label htmlFor="education-input-school">School:</label>
                      <input 
                        type="text" 
                        id="education-input-school"
                        placeholder={education.school}
                        data-key = 'school'
                        onChange={event => this.handleEduChange(index, event)}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="input-button-row">
              <button onClick={this.addEducation}>Add</button>
            </div>
          </fieldset>


          <fieldset className="skills">
            <legend>Skills and Certifications</legend>

            <div className="skills-input-container">

              {this.state.skills.map((skill, index) => {
                return(
                  <div className="skill-input-container" key={index}>
    
                      <label htmlFor="skill-input">Skill {index+1}:</label>
                      <input 
                        type="text" 
                        id="skill-input"
                        placeholder={skill}
                        data-key = 'skill'
                        onChange={event => this.handleSkillChange(index, event)}
                      />
                      <i 
                      className="fa-solid fa-xmark"
                      onClick={event => this.removeSkill(index)}
                      >
                      </i>

                  </div>
                )
              })}
              
            </div>

            <div className="input-button-row">
              <button onClick={this.addSkill}>Add</button>
            </div>
          </fieldset>

        </div>

        <div className="resume-render">
          <Info info={info}/>
          <Experience experiences={experiences}/>
          <Education educations={educations}/>
          <Skills skills={skills}/>
        </div>
      </div>
    );
  }
}

export default App;
