import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  listAllPosts,
  listPostsCategory,
  selectedPost
} from '../actions/post_actions'

import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PostsList extends Component {
  componentDidMount () {
    this.props.listPosts()
  }

  render () {
    console.log('dados all post ' + this.props.allPosts)
    let displayposts = []

    if (
      this.props.selectedCategory !== '' &&
      this.props.selectedCategory !== '#'
    ) {
      console.log('dados post category ' + this.props.postsCategory)
      console.log('dados all post ' + this.props.allPosts)

      const dadosPost = this.props.postsCategory.map(item =>
        this.props.allPosts.find(postObj => postObj.id === item)
      )
      displayposts = dadosPost
    } else {
      displayposts = this.props.allPosts
    }

    return (
      <div>
        <h2>Posts:</h2>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Author</th>
              <th>Likes</th>
              <th>Comment Count</th>
              <th>Select Post</th>
            </tr>
          </thead>
          {displayposts &&
            displayposts.map(post => {
              return (
                <tbody key={post.title}>
                  <tr>
                    <td>
                      {post.category}
                    </td>
                    <td>
                      {post.title}
                    </td>
                    <td>
                      {post.author}
                    </td>
                    <td>
                      {post.voteScore}
                    </td>
                    <td>
                      {post.commentCount}
                    </td>
                    <td align='center'>
                      <Link
                        to={{
                          pathname: '/PostDetail',
                          state: { post: post}
                        }}
                      >
                        Read
                      </Link>
                    </td>
                  </tr>
                </tbody>
              )
            })}
        </Table>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    allPosts: state.posts.allPosts,
    postsCategory: state.postsCategory.postsCategory,
    selelectedPost: state.selectedPost.selelectedPost,
    selectedCategory: state.selectedCategory.selectedCategory
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listPosts: data => dispatch(listAllPosts(data)),
    listPostsCategory: data => dispatch(listPostsCategory(data)),
    selectedPost: data => dispatch(selectedPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
