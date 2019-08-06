import React from 'react'
import './index.sass'

import { Link } from 'react-scroll'
import InfoBlock from "../../shared/InfoBlock";

class Mvp extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center block-plain p-4" id="mvp">
        <div className="container">
          <h2 className="text-center mb-5">MVP for $5000</h2>
          <div className="row">
            <InfoBlock title="WHY FIXED PRICE">
              <p>We believe that a quick entry into the market with MVP is extremely important in order not to miss the moment. Therefore, we offer to develope MVP of your product for $ 5000.</p>
            </InfoBlock>
            <InfoBlock title="WHAT TO EXPECT">
              <ul>
                <li>Marketing Research</li>
                <li>Estimation</li>
                <li>Design</li>
                <li>Development</li>
                <li>Production</li>
              </ul>
            </InfoBlock>
            <InfoBlock title="WHY DATACRAFTS">
                <ul>
                  <li>We make clean code</li>
                  <li>We have experienced developers</li>
                  <li>We have an established process</li>
                  <li>We have project managers</li>
                  <li>We are geeks</li>
                </ul>
            </InfoBlock>
          </div>
          <div className="text-center">
            <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-100} duration={500}>
              <span className="js-nav-link btn btn-lg btn-solid py-0 px-5 mt-5">START A PROJECT</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Mvp;