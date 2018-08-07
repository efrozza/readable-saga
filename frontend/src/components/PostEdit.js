import React, { Component } from 'react'
import PostForm from './PostForm'
import { addPost } from '../actions/post_actions'
import { connect } from 'react-redux'

class PostEdit extends Component {
  render () {
    return (
      <div>
        <PostForm />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: values => dispatch(addPost(values))
  }
}
export default connect(null, mapDispatchToProps)(PostNew)
