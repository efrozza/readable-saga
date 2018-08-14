import React, { Component } from 'react'
import { Grid, Panel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { votePost, deletePost, getPostDetail } from '../actions/post_actions'
import { getComments } from '../actions/comment_actions'
import moment from 'moment'
import PostCommentsList from './PostCommentsList'
import PostScore from './PostScore'
import CommentAdd from './CommentAdd'
import Page404 from './Page404'
import Categories from './Categories'

class PostDetail extends Component {
  componentDidMount () {
    if (this.props.post === '' || this.props.post == null) {
      this.props.getPostDetail(this.props.match.params.id)
    }
    this.props.getComments(this.props.match.params.id)
  }

  render () {
    const { post, deletePost, history, votePost } = this.props

    return !post
      ? <Page404 />
      : <Grid>
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
            {post.body}
          </Panel.Body>
          <Panel.Body>
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
              deletePost(post.id)
              history.push('/')
            }}
            >
              Delete
            </Button>{' '}
          <Button
            bsSize='xsmall'
            onClick={e => {
              votePost(post.id, e.target.value)
            }}
            value='upVote'
            >
              upVote
            </Button>{' '}
          <Button
            bsSize='xsmall'
            onClick={e => {
              votePost(post.id, e.target.value)
            }}
            value='downVote'
            >
              downVote
            </Button>
        </div>
        <CommentAdd parentId={this.props.match.params.id} />
        <h3>
            Comments ({post.commentCount})
          </h3>
        <PostCommentsList />
      </Grid>
  }
}

const mapStateToProps = ({ posts }, props) => ({
  post: posts.find(p => p.id === props.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  votePost: (data, vote) => dispatch(votePost(data, vote)),
  getComments: data => dispatch(getComments(data)),
  deletePost: id => dispatch(deletePost(id)),
  getPostDetail: id => dispatch(getPostDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
