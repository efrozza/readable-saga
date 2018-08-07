import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Table,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Grid
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { votePost, deletePost } from '../actions/post_actions'
import sortBy from 'sort-by'

class PostsList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sort: 'title'
    }
  }

  sortList (sort) {
    this.setState({ sort })
  }

  render () {
    return (
      <Grid>
        <h2 align='left'>All Posts</h2>
        <p>
          <strong>Sort By:</strong>
          <FormGroup>
            <FormControl
              componentClass='select'
              name='category'
              onChange={event => this.sortList(event.target.value)}
            >
              <option value=' ' />
              <option value='voteScore'>Vote Score</option>
              <option value='timestamp'>Date</option>
              <option value='title'>Title</option>
              <option value='category'>Category</option>
            </FormControl>
          </FormGroup>
        </p>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Comment Count</th>
              <th>Likes</th>
              <th>Select Post</th>
              <th>Manage</th>
              <th>Vote</th>
              <th>Category</th>
            </tr>
          </thead>
          {this.props.posts &&
            this.props.posts.sort(sortBy(this.state.sort)).map(post => {
              return (
                <tbody key={post.id}>
                  <tr>
                    <td>
                      {post.title}
                    </td>
                    <td>
                      {post.author}
                    </td>
                    <td>
                      {post.commentCount}
                    </td>
                    <td>
                      {post.voteScore}
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
                      <Link
                        to={{
                          pathname: `/edit/${post.category}/${post.id}`
                        }}
                      >
                        Edit
                      </Link>
                      <Button
                        bsSize='xsmall'
                        onClick={e => {
                          this.props.deletePost(post.id)
                        }}
                      >
                        Delete
                      </Button>
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
                    <td>
                      {post.category}
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
    votePost: (data, vote) => dispatch(votePost(data, vote)),
    deletePost: id => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
