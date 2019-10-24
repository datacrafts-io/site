import React from 'react'
import './index.sass'

import StackItem from './StackItem/index'

class Stack extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center block-colorful p-4" id="stack">
        <div className="container">
          <h2 className="text-center mb-5">Stack</h2>
          <p className="text-center">
            Our every-day-stack includes all essential technologies to make any project live within the shortest timeframe:
          </p>
          <div className="row">
            <div className="col">
              <StackItem icon="ruby" name="Ruby" />
              <StackItem icon="" name="Ruby on Rails" />
              <StackItem icon="" name="Node.js" />
              <StackItem icon="" name="Java" />
            </div>
            <div className="col">
              <StackItem icon="" name="JavaScript" />
              <StackItem icon="" name="ReactJS" />
              <StackItem icon="" name="Vue.js" />
              <StackItem icon="" name="Angular" />
            </div>
            <div className="col">
              <StackItem icon="" name="Blockchain" />
              <StackItem icon="" name="Solidity" />
              <StackItem icon="" name="Vyper" />
              <StackItem icon="" name="Smart Contracts" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stack;