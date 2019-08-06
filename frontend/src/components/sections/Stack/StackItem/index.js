import React from 'react'
import './index.sass'

class StackItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { image_url: `/assets/images/${props.icon}` }
  }
  render() {
    return (
      <div className="stack-item">
        <div className={"icon align-middle " + this.props.icon}></div>
        <span className="name align-middle">{this.props.name}</span>
      </div>
    )
  }
}

export default StackItem
