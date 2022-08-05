import React, { Component } from 'react';

class Experience extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { experiences } = this.props;

    return (
      <div className="experiences-render-container">
        

        
        {experiences.map((experience, index) => {
          if (index === 0){
            return( 
              <div className='experience-render'>
                <h2>Professional Experience</h2>
                <div className='experience-render' key={index}>
                  <div className='experience-render-heading'>
                    <div className='experience-render-title'>
                      {experience.title}
                    </div>
                    <div className='experience-render-date'>
                      {experience.start} - {experience.end}
                    </div>
                  </div>
                  <div className='experience-render-company'>
                    {experience.company}
                  </div>
                  <div className='experience-render-description'>
                    {experience.description}
                  </div>
                </div>
              </div>
            )
          } else {
            return( 
              <div className='experience-render' key={index}>
                <div className='experience-render-heading'>
                  <div className='experience-render-title'>
                    {experience.title}
                  </div>
                  <div className='experience-render-date'>
                    {experience.start} - {experience.end}
                  </div>
                </div>
                <div className='experience-render-company'>
                  {experience.company}
                </div>
                <div className='experience-render-description'>
                  {experience.description}
                </div>
              </div>
            )
          }


        })}

        


      </div>
    )
  }
}

export default Experience;