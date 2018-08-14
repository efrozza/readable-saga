import React, { Component } from 'react'
import PostForm from './PostForm'
import { connect } from 'react-redux'
import { editPost } from '../actions/post_actions'

class PostEdit extends Component {
  render () {
    const { post, editPost, history } = this.props

    return (
      <div>
        <PostForm
          post={post}
          onSubmit={post => {
            editPost(post.id, post)
            history.push('/')
          }}
        />
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  if (props && props.match) {
    return {
      post: state.posts.find(p => p.id === props.match.params.id)
    }
  } else {
    return { post: {} }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    editPost: (postId, post) => dispatch(editPost(postId, post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
