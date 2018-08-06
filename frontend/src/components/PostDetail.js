import React, { Component } from 'react'
import { Grid, Panel, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PostCommentsList from './PostCommentsList'
import PostScore from './PostScore'
import { connect } from 'react-redux'
import { votePost } from '../actions/post_actions'
import { getComments } from '../actions/comment_actions'
import moment from 'moment'

class PostDetail extends Component {
  componentDidMount () {
    console.log('entrou aqui')
    this.props.getComments('8xf0y6ziyjabvozdd253nd')
  }

  render () {
    const post = this.props.post

    return (
      <div>
        <Grid>
          <Panel bsStyle='primary'>
            <Panel.Heading>
              <Panel.Title componentClass='h3'>
                {moment.unix(post.timestamp).format('YYYY-MM-DD HH:mm')} -{' '}
                {post.title} -
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
                this.props.votePost(post.id, e.target.value)
              }}
              value='upVote'
            >
              upVote
            </Button>
            <Button
              bsSize='small'
              onClick={e => {
                this.props.votePost(post.id, e.target.value)
              }}
              value='downVote'
            >
              downVote
            </Button>
          </ButtonToolbar>

          <PostCommentsList />
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  if (props && props.match) {
    return {
      post: state.posts.find(p => p.id == props.match.params.id)
    }
  } else {
    return { post: {} }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    votePost: (data, vote) => dispatch(votePost(data, vote)),
    getComments: data => dispatch(getComments(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
