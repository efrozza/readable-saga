import React, { Component } from 'react'
import PostForm from './PostForm'
import { connect } from 'react-redux'
import { editPost } from '../actions/post_actions'

class PostEdit extends Component {
  render () {
    return (
      <div>
        <PostForm
          post={this.props.post}
          onSubmit={post => {
            this.props.dispatch(editPost(post.id, post))
            this.props.history.push('/')
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

export default connect(mapStateToProps)(PostEdit)
