import React from 'react'
import './index.sass'

import { Link } from 'react-scroll'
import InfoBlock from "../../shared/InfoBlock";

class Mvp extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center block-plain p-4" id="mvp">
        <div className="container">
          <h2 className="text-center mb-5">MVP for $10k. With love by datacrafts.io</h2>
          <div className="row">
            <InfoBlock title="WHY FIXED PRICE">
              <p>We believe that a quick entry into the market with MVP is extremely important in order not to miss the moment. Having Minimum Viable Product allows you to test your idea with your target audience or pitch it directly to investors and we give you this opportunity without any hidden costs.</p>
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
                <p>
                  Datacrafts.io experienced first-hand that starting something new is always connected with a lot of uncertainty. We not only technically deliver the product, but in very deed lend our shoulder to you. Because we know how important it is to have someone you can count on.
                </p>
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