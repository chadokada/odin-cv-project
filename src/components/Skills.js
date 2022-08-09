import React, { Component } from 'react';

class Skills extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { skills } = this.props;

    return (
      <div className="skills-render-container">
        
        {skills.map((skill, index) => {
          if (index === 0){
            return( 
              <div className="skills-render-header-container">
              
                <div className='skill-render' key={index}>
                  <h2>Skills and Certifications</h2>
                  <div className='skill-render'>
                    {skill}
                  </div>
                </div>
              
              </div>
            )
          } else {
            return(
              <div className='skill-render' key={index}>
                {skill}
              </div>
            )
          }
        })}

      </div>
    )
  }
}

export default Skills;