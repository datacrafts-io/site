import React from 'react'
import './index.sass'

import CustomerFeedback from './CustomerFeedback/index'

class Portfolio extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center block-colorful p-4" id="portfolio">
        <div className="container">
          <h2 className="text-center mb-5">Portfolio</h2>
          <div className="row">
            <div className="col">
              <CustomerFeedback
                stack="RoR / Sidekiq / Stripe / HTML / SASS"
                desc="LipScore is a web-based network for exchanging product ratings and reviews between different websites."
                customer="Henning Frettem, CEO"
                feedback="“Olga does an amazing job! I am super happy and ready to increase the rate to $75/hr!”" />
            </div>
            <div className="col">
              <CustomerFeedback
                stack="RoR / Sidekiq / Stripe / HTML / SASS"
                desc="LipScore is a web-based network for exchanging product ratings and reviews between different websites."
                customer="Stian Fongaard, CEO"
                feedback="“Olga does an amazing job! I am super happy and ready to increase the rate to $75/hr!”" />
            </div>
            <div className="col">
              <CustomerFeedback
                stack="RoR / Sidekiq / Stripe / HTML / SASS"
                desc="LipScore is a web-based network for exchanging product ratings and reviews between different websites."
                customer="Mark Clarke, CEO"
                feedback="“Olga does an amazing job! I am super happy and ready to increase the rate to $75/hr!”" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;