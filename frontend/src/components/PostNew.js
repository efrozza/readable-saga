import React, { Component } from 'react'
import PostForm from './PostForm'
import { addPost } from '../actions/post_actions'
import { connect } from 'react-redux'

class PostNew extends Component {
  render () {
    return (
      <div>
        <PostForm onSubmit={this.props.addPost} />
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
