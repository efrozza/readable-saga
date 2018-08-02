import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PostsList extends Component {
  render () {
    let displayposts = []
    displayposts = this.props.posts

    return (
      <div>
        <h2>All Posts:</h2>
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
                          pathname: `/${post.category}/${post.id}`,
                          state: { post: post }
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
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostsList)
