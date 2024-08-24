import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ClassComponent extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h5>{this.props.name}</h5>
        <h5>{this.props.age}</h5>
      </div>
    )
  }
}

export default ClassComponent;