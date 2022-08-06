import React, { Component } from 'react';

class Education extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { educations } = this.props;

    return (
      <div className="educations-render-container">
        
        {educations.map((education, index) => {
          if (index === 0){
            return( 
              <div className='education-render-header-container' key={index}>
                <h2>Education</h2>
                <div className='education-render-container'>
                  <div className='education-render main'>
                    <div className='education-render-degree'>
                      {education.degree}
                    </div>
                    <div className='education-render-major'>
                      {education.major}
                    </div>
                  </div>
                  <div className='education-render details'>
                    <div className='education-render-school'>
                      {education.school} | 
                    </div>
                    <div className='education-render date'>
                      {education.start} - {education.end}
                    </div>
                  </div>
                </div>
              </div>
            )
          } else {
            return(
              <div className='education-render-container'>
                <div className='education-render-container'>
                  <div className='education-render main'>
                    <div className='education-render-degree'>
                      {education.degree}
                    </div>
                    <div className='education-render-major'>
                      {education.major}
                    </div>
                  </div>
                  <div className='education-render details'>
                    <div className='education-render-school'>
                      {education.school} | 
                    </div>
                    <div className='education-render date'>
                      {education.start} - {education.end}
                    </div>
                  </div>
                </div>
              </div>
            )
          }


        })}

        


      </div>
    )
  }
}

export default Education;