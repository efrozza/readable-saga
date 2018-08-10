import React, { Component } from 'react'
import PostForm from './PostForm'
import { connect } from 'react-redux'
import { addPost } from '../actions/post_actions'

class PostAdd extends Component {
  render () {
    return (
      <div>
        {/* segue o padrao de formulario generico usado nos comentarios */}
        <PostForm
          onSubmit={post => {
            this.props.addPost(post)
            this.props.history.push('/')
          }}
        />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: post => dispatch(addPost(post))
  }
}

export default connect(null, mapDispatchToProps)(PostAdd)
