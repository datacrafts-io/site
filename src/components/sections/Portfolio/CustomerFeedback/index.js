import React from 'react'
import './index.sass'

class CustomerFeedback extends React.Component {
  state = {
    image_style: {
      backgroundImage: `url(${this.props.imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    },
    customer_url: `https://robohash.org/${this.props.customer}.png?size=100x100`,
    customer_style: {
        display: 'none'
    }
  };

  render() {
    return (
      <div className="portfolio-item">
          <a href={this.props.imgRedirect} target={'_blank'}>
              <div className="picture" style={this.state.image_style} />
          </a>
          <div className="tech">{this.props.stack}</div>
          <div className="desc">{this.props.desc}</div>
          <div className="text-center" style={this.state.customer_style}>
              <img className="customer" src={this.state.customer_url} />
              <div className="customer-name">{this.props.customer}:</div>
              <div className="customer-feedback">{this.props.feedback}</div>
          </div>
      </div>
    )
  }
}

export default CustomerFeedback
