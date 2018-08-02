import React, { Component } from 'react'
import PostsList from './PostsList'

export default class PostsCategory extends Component {
  render () {
    console.log(this.props.category)
    const { category } = this.props.location.state
    return <PostsList category={this.category} />
  }
}
