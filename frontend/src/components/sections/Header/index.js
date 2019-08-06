import React, { Component } from 'react'
import './index.sass'
import logo from './logo.svg'
import { Link } from 'react-scroll'

// export { Link }

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md header">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="logo" src={logo} alt="Logo"/>
          </a>
          <button aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"
                  data-target="#navbar" data-toggle="collapse" type="button">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4">
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>
                  <span className="nav-link p-0 py-1">About</span>
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link activeClass="active" to="services" spy={true} smooth={true} offset={-100} duration={500}>
                  <span className="nav-link p-0 py-1">Services</span>
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link activeClass="active" to="stack" spy={true} smooth={true} offset={-100} duration={500}>
                  <span className="nav-link p-0 py-1">Stack</span>
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link activeClass="active" to="mvp" spy={true} smooth={true} offset={-100} duration={500}>
                  <span className="nav-link p-0 py-1">MVP for $5k</span>
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>
                  <span className="nav-link p-0 py-1">Portfolio</span>
                </Link>
              </li>
            </ul>
            <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-100} duration={500}>
              <span className="btn btn-sm btn-outline contacts" href="#contacts">Get in touch</span>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}


