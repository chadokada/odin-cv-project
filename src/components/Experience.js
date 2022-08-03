import React, { Component } from 'react';

class Experience extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { experiences } = this.props;

    return (
      <div className="experience">
        <h2>Professional Experience</h2>

        
        {experiences.map((experience) => {
          return( 
            <div className='experience'>
              <div className='experience-heading'>
                <div className='experience-title'>{experience.title}</div>
                <div className='experience-date'>
                  {experience.start} - {experience.end}
                </div>
              </div>
              <div className='experience-company'>{experience.company}</div>
              <div className='experience-description'>{experience.description}</div>
            </div>
          )

        })}

        


      </div>
    )
  }
}

export default Experience;