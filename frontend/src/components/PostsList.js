import React, { Component } from 'react'
import PostItem from './PostItem'

export default class CategoryPostsList extends Component {
  render () {
    return (
      <div>
        <PostItem />
        <PostItem />
      </div>
    )
  }
}
