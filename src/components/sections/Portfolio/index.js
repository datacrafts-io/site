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
            <div className="col-md">
              <CustomerFeedback
                imgRedirect='https://www.make.as/'
                imgUrl='https://www.site-shot.com/cached_image/1PWmLutDEemx2wJCrBEABQ'
                stack="Ruby on Rails / PostgreSQL / Sinatra / Microservice architecture"
                desc="Newsmail is an advanced business mailing service from our long-term partners Make AS. Another great product built for a company who produces popular marketing tools for business. We managed to deliver the fail-safe mailing system, sophisticated yet easy to use. The product is used by largest Norwegian network providers."
                customer="Stian Fongaard, CEO:"
                feedback="“Olga does an amazing job! I am super happy and ready to increase the rate to $75/hr!”" />
            </div>
            <div className="col-md">
              <CustomerFeedback
                imgRedirect='http://kontorplasser.no/'
                imgUrl='https://www.site-shot.com/cached_image/kMjwDutJEemDtwJCrBEABA'
                stack="Ruby on Rails / CoffeScript / Stripe"
                desc="Airbnb for office spaces with an advanced search and built-in messaging system. Kontorplasser is a unique service that connects those who are looking for a vacant office space with those who have a place to spare. The service is loved by those who have some free space and large real estate companies."
                customer="Øyvind Løland, CEO"
                feedback="“Olga does an amazing job! I am super happy and ready to increase the rate to $75/hr!”" />
            </div>
            <div className="col-md">
              <a href=""></a>
              <CustomerFeedback
                imgRedirect='https://www.lipscore.com/'
                imgUrl='https://www.site-shot.com/cached_image/r8xePOtJEemX4gJCrBEABA'
                stack="Ruby on Rails / PostgreSQL / Google Merchant / Public API"
                desc={["Subscription-based SAAS that handles the entire process of collecting and publishing customer reviews for ecommerce websites. Lipscore work with some of the biggest companies in Norway ", <a href="http://telia.no/">Telia.no</a>, ", ", <a href="http://onecall.no/">OneCall.no</a>, ", ", <a href="http://jernia.no/">Jernia.no</a>, ", ", <a href="http://kid.no/">Kid.no</a>, ", ", <a href="http://thebodyshop.no/">TheBodyShop.no</a>, " and many others."]}
                customer="Henning Fretem, CEO"
                feedback="“Olga does an amazing job! I am super happy and ready to increase the rate to $75/hr!”" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;