import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { addComment } from '../actions/comment_actions'

class CommentAdd extends Component {
  render () {
    return (
      <div>
        <h3>Add Comment</h3>
        {/* acessa formulário genérico para inclusão e edição dos comentários */}
        <CommentForm
          parentId={this.props.parentId}
          onSubmit={comment => {
            this.props.addComment(comment)
          }}
        />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: post => dispatch(addComment(post))
  }
}

export default connect(null, mapDispatchToProps)(CommentAdd)
