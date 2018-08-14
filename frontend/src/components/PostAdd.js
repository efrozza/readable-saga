import React, { Component } from 'react'
import PostForm from './PostForm'
import { connect } from 'react-redux'
import { addPost } from '../actions/post_actions'

class PostAdd extends Component {
  /* segue o padrao de formulario generico usado nos comentarios */
  render () {
    const { addPost, history } = this.props

    return (
      <div>
        <PostForm
          onSubmit={post => {
            addPost(post)
            history.push('/')
          }}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post))
})

export default connect(null, mapDispatchToProps)(PostAdd)
