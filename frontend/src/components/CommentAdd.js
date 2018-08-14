import React, { Component } from 'react'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { addComment } from '../actions/comment_actions'
import { getPostDetail } from '../actions/post_actions'

class CommentAdd extends Component {
  render () {
    /* acessa formulário genérico para inclusão e edição dos comentários */

    const { parentId, addComment, getPostDetail } = this.props

    return (
      <div>
        <h3>Add Comment</h3>
        <CommentForm
          parentId={parentId}
          onSubmit={comment => {
            addComment(comment)
            getPostDetail(parentId)
          }}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: post => dispatch(addComment(post)),
  getPostDetail: id => dispatch(getPostDetail(id))
})

export default connect(null, mapDispatchToProps)(CommentAdd)
