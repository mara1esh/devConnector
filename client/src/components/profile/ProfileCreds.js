import React, { Component } from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
       <h4>{exp.company}</h4>
       <p>
         <Moment format="YYYY/MM/DD">{exp.from}</Moment> - {exp.to === null ?
         (' Now') : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)}
       </p>
       <p><strong>Position:</strong>  {exp.title}</p>
       <p>
         {exp.location === '' ? null : (<spn><strong>Location: </strong>{exp.location}</spn>)}
       </p>
       <p>
       {exp.description === '' ? null : (<span><strong>Description: </strong>{exp.description}</span>)}
       </p>
      </li>
    ))

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
       <h4>{edu.school}</h4>
       <p>
         <Moment format="YYYY/MM/DD">{edu.from}</Moment> - {edu.to === null ?
         (' Now') : (<Moment format="YYYY/MM/DD">{edu.to}</Moment>)}
       </p>
       <p><strong>Degree:</strong>  {edu.degree}</p>
       <p>
         <strong>Field of Study: </strong>{edu.fieldofstudy}
       </p>
       <p>
       {edu.description === '' ? null : (<spn><strong>Description: </strong>{edu.description}</spn>)}
       </p>
      </li>
    ))

    return (
      <div className="row">
            <div className="col-md-6">
              <h3 className="text-center text-info">Experience</h3>
              
               {expItems.length > 0 ? 
                (<ul className="list-group">{expItems}</ul>) : 
                (<p className="text-center">No experience listed</p>)}
              
            </div>
            <div className="col-md-6">
              <h3 className="text-center text-info">Education</h3>
              <ul className="list-group">
              {eduItems.length > 0 ? 
                (<ul className="list-group">{eduItems}</ul>) : 
                (<p className="text-center">No education listed</p>)}
              </ul>
            </div>
          </div>
    )
  }
}

ProfileCreds.propTypes = {
  experience: PropTypes.array.isRequired,
  education: PropTypes.array.isRequired
}

export default ProfileCreds