import React from 'react'
import './index.sass'

class Member extends React.Component {
  constructor(props) {
    super(props)
    this.state = { image_url: `https://robohash.org/${props.name}.png?size=110x110` }
  }
  render() {
    return (
      <div className="member">
        <img className="picture" src={this.state.image_url} />
        <div className="name">{this.props.name}</div>
      </div>
    )
  }
}

export default Member;


