import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listAllPosts, listPostsCategory } from '../actions/index'
import { Table } from 'react-bootstrap'

class PostsList extends Component {
  componentDidMount () {
    console.log('acessou PostList' + this.props.selectedCategory)
    if (this.props.selectedCategory === '') this.props.listPosts()
    else {
      this.props.postCategory(this.props.selectedCategory)
    }
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
        {console.log('testando mapStateToProps' + this.props.categorias.length)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    post: state.posts.allPosts,
    postCategory: state.postsCategory.postsCategory,
    selectedCategory: state.selectedCategory.selectedCategory,
    categorias: state.categories.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listPosts: data => dispatch(listAllPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
