import React, { Component } from 'react'
import { Grid, Panel, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PostCommentsList from './PostCommentsList'
import PostScore from './PostScore'
import { connect } from 'react-redux'
import { votePost } from '../actions/post_actions'

class PostDetail extends Component {
  render () {
    const { post } = this.props.location.state

    console.log('posts no postDetail' + this.props.posts)

    return (
      <div>
        <Grid>
          <Panel bsStyle='primary'>
            <Panel.Heading>
              <Panel.Title componentClass='h3'>
                {post.title.timestamp} - {post.title} -
                <PostScore voteScore={post.voteScore} />
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>
                {post.body}
              </p>
            </Panel.Body>
            <Panel.Body>
              <strong>Author: </strong>
              {post.author}
            </Panel.Body>
          </Panel>

          <ButtonToolbar>
            <Button bsSize='small'>
              <Link to='/'>Edit</Link>
            </Button>
            <Button bsSize='small'>
              <Link to='/'>Delete</Link>
            </Button>
            <Button
              bsSize='small'
              onClick={e => {
                console.log('clicou no voto ' + post.id + ' ' + e.target.value)
                this.props.votePost(post.id, e.target.value)
              }}
              value='upVote'
            >
              upVote
            </Button>
            <Button bsSize='small'>Down Vote</Button>
          </ButtonToolbar>

          <PostCommentsList />
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    votePost: (data, vote) => dispatch(votePost(data, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
