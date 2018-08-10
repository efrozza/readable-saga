import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { editComment } from '../actions/comment_actions'

class CommentEdit extends Component {
  render () {
    return (
      <div>
        {/* acessa formulário genérico para inclusão e edição dos comentários */}
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

function mapDispatchToProps (dispatch) {
  return {
    editComment: (commentId, comment) =>
      dispatch(editComment(commentId, comment))
  }
}

export default connect(null, mapDispatchToProps)(CommentEdit)
