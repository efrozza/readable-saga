import React, { Component } from 'react'
import PostForm from './PostForm'
import { connect } from 'react-redux'
import { addPost } from '../actions/post_actions'

class PostAdd extends Component {
  render () {
    console.log('entrou no post add')
    return (
      <div>
        <PostForm
          onSubmit={post => {
            this.props.dispatch(addPost(post))
            this.props.history.push('/')
          }}
        />
      </div>
    )
  }
}

export default connect()(PostAdd)
