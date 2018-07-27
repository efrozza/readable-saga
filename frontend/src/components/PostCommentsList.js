import React, { Component } from 'react'
import CommentItem from './CommentItem'

export default class PostCommentsList extends Component {
  render () {
    return (
      <div>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    )
  }
}
