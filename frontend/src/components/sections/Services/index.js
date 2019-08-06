import React from 'react'
import './index.sass'

import { Link } from 'react-scroll'
import InfoBlock from '../../shared/InfoBlock/index'

class Services extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center block-plain p-4" id="services">
        <div className="container">
          <h2 className="text-center mb-5">Services</h2>
          <div className="row text-center">
            <InfoBlock icon="watch.svg">
              <p>Marketing Research</p>
              <p>Estimation</p>
              <p>Project Management</p>
            </InfoBlock>
            <InfoBlock icon="clipboard.svg">
              <p>Application Architecture Design</p>
              <p>Server Administration</p>
              <p>Database Design</p>
            </InfoBlock>
            <InfoBlock icon="settings.svg">
              <p>UI/UX Design</p>
              <p>Full-stack Development</p>
              <p>Application re-design</p>
            </InfoBlock>
          </div>
          <div className="text-center mt-5">
            <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-100} duration={500}>
              <span className="js-nav-link btn btn-lg btn-outline py-0 px-5">START A PROJECT</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Services;