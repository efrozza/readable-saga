import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { addComment } from '../actions/comment_actions'

class CommentAdd extends Component {
  render () {
    return (
      <div>
        <h3>Add Comment</h3>
        <CommentForm
          parentId={this.props.parentId}
          onSubmit={comment => {
            this.props.dispatch(addComment(comment))
          }}
        />
      </div>
    )
  }
}

export default connect()(CommentAdd)
