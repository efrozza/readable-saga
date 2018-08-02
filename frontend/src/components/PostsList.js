import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Grid } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { votePost } from '../actions/post_actions'

class PostsList extends Component {
  render () {
    return (
      <Grid>
        <h2 align='left'>All Posts:</h2>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Author</th>
              <th>Likes</th>
              <th>Comment Count</th>
              <th>Select Post</th>
              <th>Manage</th>
              <th>Vote</th>
            </tr>
          </thead>
          {this.props.posts &&
            this.props.posts.map(post => {
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
                          pathname: `/${post.category}/${post.id}`
                        }}
                      >
                        Read
                      </Link>
                    </td>
                    <td>
                      <Button bsSize='xsmall'>Edit</Button>{' '}
                      <Button bsSize='xsmall'>Delete</Button>
                    </td>
                    <td>
                      <Button
                        bsSize='xsmall'
                        onClick={e => {
                          this.props.votePost(post.id, e.target.value)
                        }}
                        value='upVote'
                      >
                        upVote
                      </Button>{' '}
                      <Button
                        bsSize='xsmall'
                        onClick={e => {
                          this.props.votePost(post.id, e.target.value)
                        }}
                        value='downVote'
                      >
                        downVote
                      </Button>
                    </td>
                  </tr>
                </tbody>
              )
            })}
        </Table>
      </Grid>
    )
  }
}

function mapStateToProps (state, props) {
  if (props && props.match) {
    return {
      posts: state.posts.filter(p => p.category == props.match.params.category)
    }
  } else {
    return { posts: state.posts }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    votePost: (data, vote) => dispatch(votePost(data, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
