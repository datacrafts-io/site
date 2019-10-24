import React from 'react'
import './index.sass'

class InfoBlock extends React.Component {
  render() {
    return (
      <div className="info-block col-md">
        { this.props.icon && (<img className="icon" src={process.env.PUBLIC_URL + '/images/' + this.props.icon}  alt="Icon"/>) }
        { this.props.title && (<div className="heading text-center mb-4">{this.props.title}</div>) }
        <div className="description">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default InfoBlock
