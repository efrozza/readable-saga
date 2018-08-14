import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { editComment } from '../actions/comment_actions'

class CommentEdit extends Component {
  /* acessa formulário genérico para inclusão e edição dos comentários */
  render () {
    return (
      <div>
        <CommentForm
          comment={this.props.comment}
          onSubmit={comment => {
            this.props.editComment(comment.id, comment)
          }}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editComment: (commentId, comment) =>
    dispatch(editComment(commentId, comment))
})

export default connect(null, mapDispatchToProps)(CommentEdit)
