import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listAllPosts, listPostsCategory } from '../actions/index'
import { Table } from 'react-bootstrap'

class PostsList extends Component {
  componentDidMount () {
    console.log('categoria selecionada:' + this.props.selectedCategory)
    this.props.listAllPosts()
  }

  render () {
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
            </tr>
          </thead>
          {this.props.post &&
            this.props.post.map(post => {
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
    post: state.posts.allPosts,
    postCategory: state.postsCategory.postsCategory,
    selectedCategory: state.categories.selectedCategory
  }
}

export default connect(mapStateToProps, { listAllPosts, listPostsCategory })(
  PostsList
)
