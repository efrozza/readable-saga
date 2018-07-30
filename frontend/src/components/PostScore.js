import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'

export default class PostScore extends Component {
  render () {
    return (
      <Badge>
        votes: {this.props.voteScore}
      </Badge>
    )
  }
}
