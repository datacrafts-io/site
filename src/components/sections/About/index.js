import React from 'react'
import './index.sass'

import Member from './Member/index'

class About extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center block-colorful p-4" id="about">
        <div className="container">
          <h1 className="mb-4">Hi, let's get to know each other!</h1>
          <p>Datacrafts is an Agile team of proficient full-stack developers and certified project managers ready to build up a perfect Ruby or RoR based software solution for your startup.</p>
          <p>Agile. Quick. Committed.</p>
          <p>Our dev leads have immense hands-on experience. They contributed to world-known companies such as Ethereum Foundation open source projects.</p>
          <p>Datacrafts works by Scrum, that means we deliver the working product quickly and can make changes on the go.</p>
          <p>A unique combination of outstanding technical background and smart project management turns into beautiful transparent process.</p>
          <h2 className="mt-5">Meet our core team:</h2>
          <div className="people d-flex justify-content-between flex-wrap">
            <Member imageUrl='images/team/andrey.jpg'
                    name="Andrey Kurashev"
                    title="Dev Lead, Architect"/>
            <Member imageUrl='images/team/george.jpg'
                    name="George Ivanov"
                    title="PM, Certified Scrum Master, Agile Coach"/>
            <Member imageUrl='images/team/luda.jpg'
                    name="Ludmila Gorbelik"
                    title="Team Manager, PM and Business Analyst"/>
            <Member imageUrl='images/team/dasha.jpg'
                    name="Darya Shkuro"
                    title="Sales"/>
            <Member imageUrl='images/team/mike.jpg'
                    name="Mikhail Kalinin"
                    title="Founder, CTO"/>
            <Member imageUrl='images/team/serge.jpg'
                    name="Sergey Lupinos"
                    title="Team Lead"/>
            <Member imageUrl='images/team/olga.jpg'
                    name="Olga Ivanova"
                    title="Dev lead, Architect"/>
            <Member imageUrl='images/team/yarik.jpg'
                    name="Yaroslav Kasperovich"
                    title="Team Lead"/>
          </div>
        </div>
      </div>
    )
  }
}

export default About;