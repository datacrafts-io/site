import React from 'react'
import './index.sass'

import Member from './Member/index'

class About extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center block-colorful p-4" id="about">
        <div className="container">
          <h1 className="mb-4">Hi, let's get to know each other!</h1>
          <p>Datacrafts is a team of proficient web developers who are focused on Ruby and RoR based projects and experienced with web application development from scratch to production.</p>
          <p>We believe that Rails is one of the best tools to make a start up quickly.</p>
          <h2 className="mt-5">Meet our core team:</h2>
          <div className="people d-flex justify-content-between">
            <Member name="Sergey" />
            <Member name="Lyudmila" />
            <Member name="Andrey" />
            <Member name="Mikhail" />
            <Member name="Olga" />
            <Member name="George" />
            <Member name="Konstantin" />
            <Member name="Vasilisa" />
            <Member name="Darya" />
            <Member name="Alex" />
          </div>
        </div>
      </div>
    )
  }
}

export default About;