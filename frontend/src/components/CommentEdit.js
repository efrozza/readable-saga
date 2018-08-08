import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { editComment } from '../actions/comment_actions'

class CommentEdit extends Component {
  render () {
    console.log('entrou no comment edit' + this.props.comment)
    return (
      <div>
        <h3>Edit Comment</h3>
        <CommentForm
          comment={this.props.comment}
          onSubmit={comment => {
            this.props.dispatch(editComment(comment.id, comment))
          }}
        />
      </div>
    )
  }
}

export default connect()(CommentEdit)
