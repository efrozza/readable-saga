import React, { Component } from 'react'
import { Grid, Panel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { votePost, deletePost } from '../actions/post_actions'
import { getComments } from '../actions/comment_actions'
import moment from 'moment'
import PostCommentsList from './PostCommentsList'
import PostScore from './PostScore'
import CommentAdd from './CommentAdd'
import Page404 from './Page404'
import Categories from './Categories'

class PostDetail extends Component {
  componentDidMount () {
    this.props.getComments(this.props.match.params.id)
  }

  render () {
    const post = this.props.post

    if (post !== undefined) {
      return (
        <Grid>
          <Categories />
          <div>
            <h3>Post Detail</h3>
          </div>
          <Panel bsStyle='primary'>
            <Panel.Heading>
              <Panel.Title componentClass='h3'>
                {moment(post.timestamp).calendar()} - {post.title} -{' '}
                <PostScore voteScore={post.voteScore} />
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>
                {post.body}
              </p>
              <br />
              <strong>Author: </strong>
              {post.author}
            </Panel.Body>
          </Panel>

          <div>
            <Button bsSize='xsmall'>
              <Link
                to={{
                  pathname: `/edit/${post.category}/${post.id}`
                }}
              >
                Edit
              </Link>
            </Button>{' '}
            <Button
              bsSize='xsmall'
              onClick={e => {
                this.props.deletePost(post.id)
                this.props.history.push('/')
              }}
            >
              Delete
            </Button>{' '}
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
          </div>
          <CommentAdd parentId={this.props.match.params.id} />
          <PostCommentsList />
        </Grid>
      )
    } else {
      return <Page404 />
    }
  }
}

function mapStateToProps (state, props) {
  if (props && props.match) {
    return {
      post: state.posts.find(p => p.id === props.match.params.id)
    }
  } else {
    return { post: {} }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    votePost: (data, vote) => dispatch(votePost(data, vote)),
    getComments: data => dispatch(getComments(data)),
    deletePost: id => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
