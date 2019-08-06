import React from 'react'
import './index.sass'

class CustomerFeedback extends React.Component {
  state = {
    image_style: { backgroundImage: "url(https://picsum.photos/290/200)" },
    customer_url: `https://robohash.org/${this.props.customer}.png?size=100x100`
  }

  render() {
    return (
      <React.Fragment>
        <div className="picture" style={this.state.image_style} />
        <div className="tech">{this.props.stack}</div>
        <div className="desc">{this.props.desc}</div>
        <div className="text-center">
          <img className="customer" src={this.state.customer_url} />
          <div className="customer-name">{this.props.customer}:</div>
          <div className="customer-feedback">{this.props.feedback}</div>
        </div>
      </React.Fragment>
    )
  }
}

export default CustomerFeedback
