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
              <StackItem icon="ruby" name="Ruby / RoR" />
              <StackItem icon="" name="Angular" />
              <StackItem icon="" name="MongoDB" />
              <StackItem icon="" name="JavaScript" />
            </div>
            <div className="col">
              <StackItem icon="" name="Coffescript" />
              <StackItem icon="" name="HTML 5" />
              <StackItem icon="" name="Haml" />
              <StackItem icon="" name="CSS 3" />
            </div>
            <div className="col">
              <StackItem icon="" name="Postgres" />
              <StackItem icon="" name="less" />
              <StackItem icon="" name="jQuery" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stack;